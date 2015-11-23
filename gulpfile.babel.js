//

"use strict";

import childProcess from "child_process";
import del from "del";
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

gulp.task("clean:test", () => {
    return del("test/specs/lib");
});

gulp.task("eslint", () => {
    return gulp.src(["gulpfile.babel.js", "test/config/wdio.conf.js"])
        .pipe(plugins.eslint())
        .pipe(plugins.eslint.format())
        .pipe(plugins.eslint.failAfterError());
});

gulp.task("tsconfig", (cb) => {
    tsconfigGlob({}, cb);
});

const reporter = plugins.typescript.reporter.defaultReporter();
const errorReporter = {
    error: reporter.error,
    finish: (results) => {
        reporter.finish(results);
        if (results.emitSkipped) {
            throw new Error();
        }
    }
};

gulp.task("typescript", ["tsconfig"], () => {
    const tsProject = plugins.typescript.createProject("tsconfig.json", {typescript});
    const tsFilter = plugins.filter(["**/*.ts", "!**/*.d.ts"], {restore: true});

    const configFile = path.dirname(tsProject.configFileName);
    const outDir = path.resolve(configFile, tsProject.config.compilerOptions.outDir);

    return tsProject.src()
        .pipe(tsFilter)
        .pipe(plugins.tslint({tslint}))
        .pipe(plugins.tslint.report("verbose"))
        .pipe(tsFilter.restore)
        .pipe(plugins.typescript(tsProject, undefined, errorReporter))
        .js
        .pipe(gulp.dest(outDir));
});

gulp.task("tsconfig:test", (cb) => {
    tsconfigGlob({
        cwd: "test/specs"
    }, cb);
});

gulp.task("typescript:test", ["tsconfig:test"], () => {
    const tsProject = plugins.typescript.createProject("test/specs/tsconfig.json", {typescript});
    const tsFilter = plugins.filter(["**/*.ts", "!**/*.d.ts"], {restore: true});

    const configFile = path.dirname(tsProject.configFileName);
    const outDir = path.resolve(configFile, tsProject.config.compilerOptions.outDir);

    return tsProject.src()
        .pipe(tsFilter)
        .pipe(plugins.tslint({tslint}))
        .pipe(plugins.tslint.report("verbose"))
        .pipe(tsFilter.restore)
        .pipe(plugins.typescript(tsProject, undefined, errorReporter))
        .js
        .pipe(plugins.babel({
            only: null,
            retainLines: false
        }))
        .pipe(gulp.dest(outDir));
});

gulp.task("connect", () => {
    plugins.connect.server({
        root: "test/initializr"
    });
});

let selenium;

const stopServices = () => {
    plugins.connect.serverClose();
    selenium.stdin.write("stop");
};

gulp.task("wdio", ["selenium", "connect"], () => {
    return gulp.src("test/config/wdio.conf.js")
        .pipe(plugins.webdriver({
            wdioBin: require.resolve(path.join("webdriverio", "bin", "wdio"))
        }))
        .on("end", stopServices)
        .on("error", stopServices);
});

gulp.task("webdriver-update", (done) => {
    childProcess.spawn(require.resolve("protractor/bin/webdriver-manager"), ["update"], {
        stdio: "inherit"
    }).once("close", done);
});

gulp.task("selenium", ["webdriver-update"], (done) => {
    selenium = childProcess.spawn(require.resolve("protractor/bin/webdriver-manager"), ["start"], {
        stdio: ["pipe", "inherit", "ignore"]
    });

    // wait 5 seconds for server to start
    setTimeout(done, 5000);
});

gulp.task("default", (cb) => {
    runSequence(
        ["eslint"],
        ["clean"],
        ["typescript"],
        cb
    );
});

gulp.task("test", (cb) => {
    runSequence(
        ["default"],
        ["clean:test"],
        ["typescript:test"],
        ["wdio"],
        cb
    );
});
