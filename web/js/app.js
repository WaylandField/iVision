require.config({
    // your configuration key/values here
    baseUrl: "", 
    // generally the same directory as the script used in a data-main attribute 
    // for the top level script
    baseUrl: "/",
    paths: {
        'app':'js',
        'view':'js/view',
        'models':'js/models',
        'collections':'js/collections',
        'highchartlib': 'lib/Highcharts-3.0.2',
        'underscore': 'lib/backbone/underscore',
        'backbone': 'lib/backbone/backbone',
        'jquery': 'lib/jquery-2.0.3.min',
        'ejs': 'lib/ejs',
        'sparkline': 'lib/jquery.sparkline',
        'datatable': 'lib/jquery.dataTables',
        'bsdatatable': 'lib/DT_bootstrap',
        'highchart': 'lib/Highstock-1.3.2/highstock',
        'highchart-more': 'lib/Highstock-1.3.2/highcharts-more',
        'bootstrap-dropdown': 'lib/bootstrap/bootstrap-dropdown'
    }, 
    // set up custom paths to libraries, or paths to RequireJS plug-ins
    shim: {
        'underscore': {
            exports: '_'
        },
        'datatable': {
            deps: ['jquery'],
            exports: '$'
        },
        'highchart-more': {
            deps: ['highchart'],
            exports: 'Highcharts'
        },
        'sparkline': {
            deps: ['jquery'],
            exports: '$'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

define(['jquery', 'backbone', 'view/AdminPortal', 'view/GeneralPortal', './js/MockPage'],function($, Backbone, AdminPortal, GeneralPortal, MockPage){
    $(function(){
        var Workspace = Backbone.Router.extend({
            routes: {
                "login":               "login",    // #help
                "dashboard":           "dashboard",    // #help
                "navi/:pageId":        "showPage"  // #search/kiwis
            },
            login: function(){},
            dashboard: function(){
                (new AdminPortal()).render();
            },
            showPage: function(pageId){
                // test with mock data
                var page = MockPage[pageId];
                new GeneralPortal({page: page});
            }
        });
        var router = new Workspace();
        Backbone.history.start();
    });
});