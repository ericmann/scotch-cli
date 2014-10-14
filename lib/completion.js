/**
 * scotch-cli
 *
 * Copyright (c) Eric Mann, 10up
 * Licensed under the MIT license.
 * https://github.com/ericmann/scotch-cli/blob/master/LICENSE
 */

'use strict';

// Node libraries
var fs = require( 'fs' ),
	path = require( 'path' );

exports.print = function( name ) {
	var code = 0,
		filepath = path.join( __dirname, '../completion', name ),
		output;

	try {
		output = String( fs.readFileSync( filepath ) );
	} catch ( err ) {
		code = 5;
		output = 'echo "Specified scotch shell auto-completion rules ';
		if ( name && name !== 'true' ) {
			output += 'for \'' + name + '\' ';
		}
		output += 'not found."';
	}

	console.log( output );
	process.exit( code );
};