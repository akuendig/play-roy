package com.kuendig

import sbt.PlayExceptions.AssetCompilationException
import java.io.File
import scala.sys.process._
import sbt.IO
import io.Source._

object RoyCompiler {
  def compile(royFile: File, options: Seq[String]): (String, Option[String], Seq[File]) = {
    val compiler = this.getClass.getClassLoader.getResource("src/compile.js")

    try {
      val (jsOutput, dependencies) = runCompiler(
        Seq("node", compiler.getPath, "-b", "--stdio", royFile.getAbsolutePath) ++ options
        )
      val (compressedJsOutput, _) = runCompiler(
        Seq("node", compiler.getPath, "-b", "--stdio", royFile.getAbsolutePath) ++ options
        )

      (jsOutput, Some(compressedJsOutput), dependencies.map { new File(_) } )
    } catch {
      case e: RoyCompilationException => {
        throw AssetCompilationException(e.file.orElse(Some(royFile)), "roy compiler: " + e.message, e.line, e.column)
      }
    }
  }

  private val DependencyLine = """Using browser module: (.*)""".r

  private def runCompiler(command: ProcessBuilder): (String, Seq[String]) = {
    val err = new StringBuilder
    val out = new StringBuilder

    val capturer = ProcessLogger(
      out.append(_),
      err.append(_))

    val process = command.run(capturer)

    if (process.exitValue == 0) {
      val dependencies = out.lines.collect {
          case DependencyLine(f) => f
        }

      (DependencyLine.replaceAllIn(out, ""), dependencies.toList.distinct)
    } else
      throw new RoyCompilationException(err.toString)
  }

  private val LocationLine = """\s*on line (\d+) of (.*)""".r

  private class RoyCompilationException(stderr: String) extends RuntimeException {

    val (file: Option[File], line: Int, column: Int, message: String) = parseError(stderr)

    private def parseError(error: String): (Option[File], Int, Int, String) = {
      var line = 0
      var seen = 0
      var column = 0
      var file : Option[File] = None
      var message = "Unknown error, try running roy directly"
      for (errline: String <- augmentString(error).lines) {
        errline match {
          case LocationLine(l, f) => { line = l.toInt; file = Some(new File(f)); }
          case other if (seen == 0) => { message = other; seen += 1 }
          case other =>
        }
      }
      (file, line, column, message)
    }
  }
}
