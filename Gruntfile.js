/**
 * scotch-cli
 *
 * Copyright (c) Eric Mann, 10up
 * Licensed under the MIT license.
 * https://github.com/ericmann/scotch-cli/blob/master/LICENSE
 */

'use strict';

module.exports = function( grunt ) {

	// Project configuration
	grunt.initConfig( {
		jshint: {
			all: [
				'Gruntfile.js',
				'lib/**/*.js',
				'bin/*'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		}
	} );

	// Load plugins
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );

	// Register tasks
	grunt.registerTask( 'test',    ['jshint'] );
	grunt.registerTask( 'default', ['test']   );
};