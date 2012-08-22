### play-roy

[Roy][roy] asset handling plugin for [Play 2.0][play]. Implemented as [sbt][sbt] plugin.

## Prerequisites

[Roy][roy] compiler needs to be installed for plugin to work. This means that `roy` executable
needs to be found in path. roy can be installed by installing `roy` module with npm.

	npm -g install roy

You can verify that `roy` has been installed by following command:

	% roy -v
	Roy: Small functional language that compiles to JavaScript
	0.1.5


## Installation

To install locally having installd play with homebrew
	sbt -Dplay.version=<play-version> publish-local

Add following to your projects `project/plugins.sbt`

	addSbtPlugin("com.kuendig" % "play-roy" % "0.1.2")

This adds roy asset compiler to Play project. `*.roy` files in `app/assets` directories will then be automatically compiled to `*.js` files.

## Versions

* *0.1.2* [2012-08-22] 
* *0.1.0* [2012-08-17] Initial release

## Acknowledgements

This plugin is based on Johannes Emerich's [play-stylus][play-stylus] plugin for handling 
Stylus assets.

## License

Copyright (c) 2012 Adrian Kuendig

MIT license

[roy]: http://roy.brianmckenna.org/
[play]: http://www.playframework.org/
[sbt]: https://github.com/harrah/xsbt
[play-stylus]: https://github.com/knuton/play-stylus
