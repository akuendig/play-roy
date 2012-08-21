package com.kuendig

import sbt.PlayExceptions.AssetCompilationException
import java.io.File
import scala.sys.process._
import sbt.IO
import io.Source._

object RoyCompiler {
  def compile(royFile: File, options: Seq[String]): (String, Option[String], Seq[File]) = {
    val compiler = this.getClass.getResource("/src/compile.js").toURI.getPath

    try {
      val (jsOutput, dependencies) = runCompiler(
          Seq("node", compiler, "-b", "--stdio") ++ options,
          royFile
        )
      val (compressedJsOutput, _) = runCompiler(
          Seq("node", compiler, "-b", "--stdio") ++ options,
          royFile
        )

      (jsOutput, Some(compressedJsOutput), dependencies.map { new File(_) } )
    } catch {
      case e: RoyCompilationException => {
        throw AssetCompilationException(e.file.orElse(Some(royFile)), "roy compiler: " + e.message, e.line, e.column)
      }
    }
  }

  private val DependencyLine = """Using browser module: (.*)""".r

  private def runCompiler(command: ProcessBuilder, file: File): (String, Seq[String]) = {
    val err = new StringBuilder
    val out = new StringBuilder

    val capturer = ProcessLogger(
      o => out.append(o + "\n"),
      e => err.append(e + "\n"))

    val exitValue = file #> command ! capturer

    if (exitValue == 0) {
      val dependencies = out.lines.collect {
          case DependencyLine(f) => f
        }

      (DependencyLine.replaceAllIn(out, "").trim, dependencies.toList.distinct)
    } else
      throw new RoyCompilationException(err.toString)
  }

  private val LocationLine = """Error: .* on line (\d+): (.*)""".r

  private class RoyCompilationException(stderr: String) extends RuntimeException {

    val (file: Option[File], line: Int, column: Int, message: String) = {

      val err: Option[(Option[File], Int, Int, String)] = for {
        LocationLine(l, msg) <- LocationLine findFirstIn stderr
      } yield (None, l.toInt, 0, msg)

      err.getOrElse((None, 0, 0, stderr))
    }
  }
}
