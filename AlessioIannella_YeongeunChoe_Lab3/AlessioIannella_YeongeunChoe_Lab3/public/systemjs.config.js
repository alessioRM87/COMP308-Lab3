(function (global) {
    // map tells the System loader where to look for things
    // our app is within the app folder
    var map = {
        app: 'app',
        '@angular': 'lib/@angular',
        'rxjs': 'lib/rxjs',
        // angular bundles
        '@angular/core': 'lib/@angular/core/bundles/core.umd.js',
        '@angular/common': 'lib/@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'lib/@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'lib/@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'lib/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/router': 'lib/@angular/router/bundles/router.umd.js',
        '@angular/forms': 'lib/@angular/forms/bundles/forms.umd.js',
        '@angular/common/http': 'lib/@angular/common/bundles/common-http.umd.js', 'tslib': 'npm:tslib/tslib.js',
        'tslib': 'lib/tslib/tslib.js'

    };
    // packages tells the System loader how to load
    // when no filename and/or no extension
    var packages = {
        app: {
            main: './bootstrap.js',
            defaultExtension: 'js'
        },
        //necessary for the newest systemjs module
        rxjs: {
            defaultExtension: 'js'
        }
    };

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'common/http',
        'router',
        'platform-browser',
        'platform-browser-dynamic'
    ];
    // add package entries for angular packages in the form
    // '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    //ngPackageNames.forEach(function (pkgName) {
    //    packages['@angular/' + pkgName] = {
    //        main: '/bundles/' + pkgName + '.umd.js',
    //        defaultExtension: 'js'
    //    };

    //});
    //packages['@angular/common/http'] = {
    //    main: '/bundles/' + 'common-http' + '.umd.js',
    //    defaultExtension: 'js'
    //};
    //
    System.config({
        defaultJSExtensions: true,
        transpiler: null,
        packages: packages,
        map: map
    });
})(this);