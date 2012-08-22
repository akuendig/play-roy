package com.kuendig.roy

import sbt._
import sbt.Keys._

object RoyPlugin extends Plugin {
    val royEntryPoints = SettingKey[PathFinder]("play-roy-entry-points")
    val royOptions = SettingKey[Seq[String]]("play-roy-options")
    val royWatcher = PlayProject.AssetsCompiler("roy",
        (_ ** "*.roy"),
        royEntryPoints in Compile,
        { (name, min) => name.replace(".roy", if (min) ".min.js" else ".js") },
        { RoyCompiler.compile _ },
        royOptions in Compile
    )

    override val settings = Seq(
        royEntryPoints <<= (sourceDirectory in Compile)(base => (base / "assets" ** "*.roy")), 
        royOptions := Seq.empty[String],
        resourceGenerators in Compile <+= royWatcher
    )
}
