/**
 * scotch-cli
 *
 * Copyright (c) Eric Mann, 10up
 * Licensed under the MIT license.
 * https://github.com/ericmann/scotch-cli/blob/master/LICENSE
 */

'use strict';

// Project metadata.
var pkg = require( '../package.json' );

// Display scotch-cli version.
exports.version = function () {
	console.log( 'scotch-cli v' + pkg.version );
};

// Show help, then exit with a message and error code.
exports.fatal = function ( msg, code ) {
	exports.helpHeader();
	console.log( 'Fatal error: ' + msg );
	console.log( '' );
	exports.helpFooter();
	process.exit( code );
};

// Show help and exit.
exports.help = function () {
	exports.helpHeader();
	exports.helpFooter();
	process.exit();
};

// Help header.
exports.helpHeader = function () {
	console.log( 'scotch-cli: ' + pkg.description + ' (v' + pkg.version + ')' );
	console.log( '' );
};

// Help footer.
exports.helpFooter = function () {
	[
		'If you\'re seeing this message, either a Scotchfile wasn\'t found or scotch',
		'hasn\'t been installed locally to your project. For more information about',
		'installing and configuring scotch, please see the Getting Started guide:',
		'',
		'https://github.com/ericmann/scotch/blob/master/README.md',
	].forEach( function ( str ) {
			console.log( str );
		} );
};