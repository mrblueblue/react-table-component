var gulp = require('gulp');
var webpack = require('gulp-webpack');

gulp.task('build', function() {
  return gulp.src('./src/App.jsx')
    .pipe(
      webpack({
        output: {
          filename: 'bundle.js'
        },
        module: {
          loaders: [
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loaders: ['jsx-loader?insertPragma=React.DOM&harmony', 'babel']
            }
          ]
        },
        externals: {
          'react': 'React'
        },
        resolve: {
          extensions: ['', '.js', '.jsx']
        }
      }))
    .pipe(gulp.dest('./src/'));
});

gulp.task('watch', function() {
  gulp.watch(['*.jsx'], ['build']);
});
