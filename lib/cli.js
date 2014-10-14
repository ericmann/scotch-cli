/**
 * scotch-cli
 *
 * Copyright (c) Eric Mann, 10up
 * Licensed under the MIT license.
 * https://github.com/ericmann/scotch-cli/blob/master/LICENSE
 */

'use strict';

var nopt = require( 'nopt' );

// CLI options
exports.known = {
	help      : Boolean,
	version   : Boolean,
	completion: String
};
exports.aliases = {
	h: '--help',
	V: '--version',
	v: '--verbose'
};

// Parse options and return an object
Object.defineProperty( exports, 'options', {
	get: function() {
		return nopt( exports.know, exports.aliases, process.argv, 2 );
	}
} );