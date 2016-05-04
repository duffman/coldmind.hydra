/**
 * 	Zynaptic App Framework
 *	© 2016 Coldmind Ltd
 *
 *	Project files pre processing
 * 
 *	@author: Patrik Forsberg <mail@patrik.guru>
 */


/* Old Stuff
var replace				= require('gulp-replace'); 
var browserSync			= require('browser-sync');
var nodemon				= require('gulp-nodemon');
*/

/// <reference path="./typings/node.d.ts" />

"use strict";

var path				= require("path");
var gulp				= require("gulp");
var typescript			= require('gulp-typescript');

console.log('Hydra Build Machine 1.2.1');

var rootDir = __dirname;

function prepare() {
	console.log("Prepare...");	
}

gulp.task("prepare", prepare);




// gulp.task('devmode', ['browser-sync'], function () {
// 	console.log('Staring Development Mode...')
// });

// gulp.task('browser-sync', ['nodemon'], function() {
// 	browserSync.init(null, {
// 		proxy: "http://localhost:6060",
// 		files: ["public/**/*.*","client/**/*.*"],
// 		browser: "google chrome",
// 		port: 8080,
// 	});
// });





/*
const TASK_BUILD_FRAMEWORK	= "build_framework";
const TASK_BUILD_WEBAPP	= "build_web_app";

gulp.task(TASK_DEFAULT, function() {
	gulp.watch(sassSourceFolder, [TASK_STYLES]);
});
*/