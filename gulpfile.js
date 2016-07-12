var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var rename = require('gulp-rename');
var crisper = require('gulp-crisper');


gulp.task('vulcanize_tagihan', function() {
	gulp.src('build_tagihan.html')
		.pipe(vulcanize({
			inlineCss: true,
			inlineScripts: true,
			stripComments: true
		}))
		.on('error', console.error.bind(console))
		.pipe(rename('tagihan.html'))
		.pipe(crisper())
		.pipe(gulp.dest('../cordova/www'))
})


gulp.task('vulcanize_index', function() {
	gulp.src('build_index.html')
		.pipe(vulcanize({
			inlineCss: true,
			inlineScripts: true,
			stripComments: true
		}))
		.on('error', console.error.bind(console))
		.pipe(rename('index.html'))
		.pipe(crisper())
		.pipe(gulp.dest('../cordova/www'))
})


gulp.task('watch', function() {
	gulp.watch('bower_components/**/*.*', ['vulcanize_tagihan', 'vulcanize_index'])
	gulp.watch('elements/*.*', ['vulcanize_tagihan', 'vulcanize_index'])
	gulp.watch('images/**/*.*', ['vulcanize_tagihan'])
	gulp.watch('src/*.*', ['vulcanize_tagihan'])
	gulp.watch('build_tagihan.html', ['vulcanize_tagihan'])
	gulp.watch('build_index.html', ['vulcanize_index'])
});


gulp.task('default', ['vulcanize_tagihan', 'vulcanize_index', 'watch']);