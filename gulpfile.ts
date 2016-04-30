/**
 * 	Zynaptic App Framework
 *	© 2016 Coldmind Ltd
 *
 *	Project files pre processing
 * 
 *	@author: Patrik Forsberg <mail@patrik.guru>
 */

/// <reference path="./typings/node.d.ts" />

"use strict";


// Gulp stuff
var gulp				= require("gulp");
var replace				= require('gulp-replace'); 
var concat				= require('gulp-concat');

var uglify				= require('gulp-uglify');
var typescript			= require('gulp-typescript');

var browserSync			= require('browser-sync');
var nodemon				= require('gulp-nodemon');

var gulpSass			= require('gulp-sass');
var sassSourceFolder	= './assets/sass/**/*.scss';
var cssDestFolder		= './public/stylesheets/';

console.log('BeatBucket Gulp Build Machine 1.2.1');

gulp.task('devmode', ['browser-sync'], function () {
	console.log('Staring Development Mode...')
});

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:6060",
		files: ["public/**/*.*","client/**/*.*"],
		browser: "google chrome",
		port: 8080,
	});
});

gulp.task('nodemon', function(callback: any) {
	var started = false;
	
	return nodemon({ script: './server/launch.js' }).on('start', start() );

	function start() {
		// Avoid nodemon being started multiple times
		if (!started) {
			callback();
			started = true; 
		} 
	}
});


const TASK_DEFAULT	= "default";
const TASK_STYLES	= "styles";

/**********************************
* Style preparation task
*/
gulp.task(TASK_STYLES, function() {
	console.log('Compiling Site SASS files...');
	gulp.src(sassSourceFolder)
		.pipe(gulpSass().on('error', gulpSass.logError))
		.pipe(gulp.dest(cssDestFolder)
	);
});

gulp.task(TASK_DEFAULT, function() {
	gulp.watch(sassSourceFolder, [TASK_STYLES]);
});