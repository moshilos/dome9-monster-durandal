/**
 * Created by Moshi on 21/09/2014.
 */
requirejs.config({
    paths: {
	
        'text': '../bower_components/requirejs-text/text',
        'durandal':'../bower_components/durandal/js',
        'plugins' : '../bower_components/durandal/js/plugins',
        'transitions' : '../bower_components/durandal/js/transitions',
        'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap',
        'knockout': '../bower_components/knockout.js/knockout.debug',
        'jquery': '../bower_components/jquery/jquery'
    },
    shim:{
        'bootstrap': {
            deps: ['jquery']
        }

    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator'], function(system,app, viewLocator){

    system.debug(true);
    app.title="Dome9"
    app.configurePlugins({
        router: true,
        dialog: true
    });

    viewLocator.useConvention();

    app.start().then(function(){
        app.setRoot('viewmodels/shell');
    });
});
