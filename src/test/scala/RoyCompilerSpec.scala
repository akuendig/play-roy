import org.scalatest.FunSpec
import java.io.File
import net.litola.SassCompiler

class RoyCompilerSpec extends FunSpec {
  describe("RoyCompiler") {
    it("should compile well-formed roy file") {
      val royFile = new File("src/test/resources/ok.roy")
      val (full, minified, deps) = RoyCompiler.compile(royFile, Nil)
      assert(full.replaceAll("""/\* line.* \*/\n""", "") === ".test {\n  display: none; }\n")
      assert(minified.orNull === ".test{display:none}\n")
      assert(deps.length === 1)
      assert(deps(0).getName() === "ok.roy")
    }
    it("should compile well-formed roy file containing import") {
      val royFile = new File("src/test/resources/ok_import.roy")
      val (full, minified, deps) = RoyCompiler.compile(royFile, Nil)
      assert(full.replaceAll("""/\* line.* \*/\n""", "") === ".test-import {\n  color: black; }\n\n.test {\n  display: none; }\n")
      assert(minified.orNull === ".test-import{color:black}.test{display:none}\n")
      assert(deps.length === 2)
      assert(deps(0).getName() === "_imported.roy")
      assert(deps(1).getName() === "ok_import.roy")
    }
    it("should fail to compile malformed roy file") {
      val royFile = new File("src/test/resources/broken.roy")
      val thrown = intercept[sbt.PlayExceptions.AssetCompilationException] {
        RoyCompiler.compile(royFile, Nil)
      }
      val expectedMessage =
        """Compilation error [Sass compiler: Syntax error: Invalid CSS after "	display: none;": expected "}", was ""]"""
      assert(thrown.line.getOrElse(0) === 3)
      assert(thrown.getMessage === expectedMessage)
    }
  }
}
