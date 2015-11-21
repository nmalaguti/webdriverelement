//

"use strict";

import del from "del";
import es from "event-stream";
import gulp from "gulp";
import gulpLoadPlugins from "gulp-load-plugins";
import path from "path";
import runSequence from "run-sequence";
import tsconfigGlob from "tsconfig-glob";
import tslint from "tslint";
import typescript from "typescript";

const plugins = gulpLoadPlugins();

gulp.task("clean", () => {
    return del("lib");
});

gulp.task("lint:gulpfile", () => {
    return gulp.src("gulpfile.babel.js")
        .pipe(plugins.eslint())
        .pipe(plugins.eslint.format())
        .pipe(plugins.eslint.failAfterError());
});

gulp.task("tsconfig", (cb) => {
    tsconfigGlob({}, cb);
});

gulp.task("typescript", () => {
    const tsProject = plugins.typescript.createProject("tsconfig.json", {typescript});
    const tsFilter = plugins.filter(["**/*.ts", "!**/*.d.ts"], {restore: true});

    const configFile = path.dirname(tsProject.configFileName);
    const rootDir = path.resolve(configFile, tsProject.config.compilerOptions.rootDir);
    const outDir = path.resolve(configFile, tsProject.config.compilerOptions.outDir);

    const sourceRoot = path.relative(outDir, rootDir);

    const tsResult = tsProject.src()
        .pipe(tsFilter)
        .pipe(plugins.tslint({tslint}))
        .pipe(plugins.tslint.report("verbose"))
        .pipe(plugins.sourcemaps.init())
        .pipe(tsFilter.restore)
        .pipe(plugins.typescript(tsProject));


    return es.merge(tsResult.js, tsResult.dts)
        .pipe(plugins.sourcemaps.write(".", {includeContent: false, sourceRoot}))
        .pipe(gulp.dest(outDir));
});

gulp.task("default", (cb) => {
    runSequence(
        ["lint:gulpfile"],
        ["clean"],
        ["tsconfig"],
        ["typescript"],
        cb
    );
});
