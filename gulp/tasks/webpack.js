var gulp = require("gulp");
var gutil = require("gulp-util");
var notify = require("gulp-notify");
var webpack = require("webpack");
var config = require('../../webpack.config.js');

gulp.task("webpack", function(callback) {
    // run webpack
    webpack(config, function(err, stats) {
        if(err) {
          notify(err);
          throw new gutil.PluginError("webpack", err);
        }

        gutil.log("[webpack]", stats.toString({}));
    });
    callback();
});
