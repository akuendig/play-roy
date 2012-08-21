import java.io.File
import org.scalatest.FunSpec
import com.kuendig.RoyCompiler

class RoyCompilerSpec extends FunSpec {
  val okJs ="""(function() {
var a = 5;
var f = function(x) {
    return 2 * x;
};
})();"""
  
  val okImportJs = """(function() {
var f = function(x) {
    return a(x);
};
})();"""

  describe("RoyCompiler") {
    it("should compile well-formed roy file") {
      val royFile = new File("src/test/resources/ok.roy")
      val (full, minified, deps) = RoyCompiler.compile(royFile, Nil)
      assert(full === okJs)
      assert(minified.orNull === okJs)
      assert(deps.length === 0)
    }
    it("should compile well-formed roy file containing import") {
      val royFile = new File("src/test/resources/ok_import.roy")
      val (full, minified, deps) = RoyCompiler.compile(royFile, Nil)
      assert(full === okImportJs)
      assert(minified.orNull === okImportJs)
      assert(deps.length === 2)
      assert(deps(0).getName() === "imported")
      assert(deps(1).getName() === "util")
    }
    it("should fail to compile malformed roy file") {
      val royFile = new File("src/test/resources/broken.roy")
      val expectedMessage = """Compilation error [roy compiler: Unexpected 'EOF']"""
      
      val thrown = intercept[sbt.PlayExceptions.AssetCompilationException] {
        RoyCompiler.compile(royFile, Nil)
      }

      assert(thrown.line.getOrElse(0) === 1)
      assert(thrown.getMessage === expectedMessage)
    }
  }
}
