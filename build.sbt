name := "play-roy"

version := "0.1.0"

sbtPlugin := true

organization := "com.kuendig"

description := "SBT plugin for handling Roy assets in Play 2.0"

resolvers += "Typesafe repository" at "http://repo.typesafe.com/typesafe/releases/"

/// Dependencies

libraryDependencies ++= Seq(
  "play" %% "play" % "2.0.3",
  "org.scalatest" %% "scalatest" % "1.7.1" % "test"
)

addSbtPlugin("play" % "sbt-plugin" % "2.0.3")                                        
