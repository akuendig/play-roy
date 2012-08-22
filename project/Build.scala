import sbt._
import sbt.Keys._

object PluginBuild extends Build {

  lazy val playRoy = Project(
    id = "play-roy", base = file(".")
  )

}
