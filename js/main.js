requirejs.config({


    paths: {
        'knockout': '../bower_components/knockout.js/knockout.debug',

        'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap',
        'jquery': '../bower_components/jquery/jquery'

    },
    shim:{
        'bootstrap': {
            deps: ['jquery']
        }

    }
});
require(['page','knockout'], function(pageViewModel,ko) {
    ko.applyBindings(pageViewModel, $('body').get(0));
});