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
        'pages':'js/pages',
        'collections':'js/collections',
        'highchartlib': 'lib/Highcharts-3.0.2',
        'underscore': 'lib/backbone/underscore',
        'backbone': 'lib/backbone/backbone',
        'jquery': 'lib/jquery-2.0.3.min',
        'i18n': 'lib/jquery.i18n.properties-min-1.0.9',
        'sparkline': 'lib/jquery.sparkline',
        'datatable': 'lib/jquery.dataTables',
        'bsdatatable': 'lib/DT_bootstrap',
        'ejs': 'lib/ejs',
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
        'i18n': {
            deps: ['jquery'],
            exports: '$'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

define(['i18n', 'backbone', 'view/GeneralPortal'],function($, Backbone, GeneralPortal){
    $(function(){
	$.i18n.properties({
	    name:'Messages', 
	    path:'messages/', 
	    mode:'map',
	    callback: function() {
		window.MSGS_FORMAT = $.i18n.prop;
		window.MSGS = $.i18n.map;
		var Workspace = Backbone.Router.extend({
		    routes: {
			"login":               "login",    // #help
			"logout":               "logout",    // #help
			"dashboard":           "dashboard",    // #help
			"navi/:pageId":        "showPage"  // #search/kiwis
		    },
		    login: function(){
			this.showPage('login');
		    },
		    logout: function(){
			var url = '/api/session';
			var that = this;
			$.ajax({
			    url:url,
			    type:'delete',
			    dataType:"json",
			    success:function (data) {
				that.login();
			    }
			});
		    },
		    dashboard: function(){
			(new AdminPortal()).render();
		    },
		    showPage: function(pageId){
			// test with mock data
			require(["pages/"+pageId], function(page){
			    if(this.mainPortal){
				this.mainPortal.cleanUp();
			    }
			    this.mainPortal = new GeneralPortal({page: page});
			});
		    }
		});
		var router = new Workspace();
		router.login();
		Backbone.history.start();
	    }
	});
    });
});