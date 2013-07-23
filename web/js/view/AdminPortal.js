define(['jquery','backbone', 'underscore', './NaviBar','./IssueStatics','./Grid','./ChartView','./Datatable','./../models/Navi','./../collections/IssueCollection'],
       function($, Backbone, _, NaviBar, IssueStatics, Grid, ChartView, Datatable,  NaviModel, IssueCollection){
           var AdminPortal = Backbone.View.extend({
               tagName : 'div',
               events:{},
               initialize: function(){
                   _.bindAll(this, 'render');
                   this.naviModel = new NaviModel({id:"1"});
                   this.naviView = new NaviBar({model: this.naviModel});
                   this.naviModel.fetch();
                   this.issues = new IssueCollection();
                   this.issuesView = new IssueStatics({collection: this.issues});
                   this.issuesTable = new Datatable({collection: this.issues});
                   this.chartView = new ChartView({collection: this.issues, chart:{type:'bar'}});
                   this.issues.fetch();
               },
               render: function(){
                   $('#header').append(this.naviView.el);
                   this.layout = new Grid();
                   $('#mainContent').append(this.layout.el);
                   this.layout.addRow([{view:this.issuesView}]);
                   this.layout.addRow([{view:this.issuesTable}]);
                   this.layout.addRow([{view:this.chartView}]);
                   this.layout.render();
               },
	       cleanUp: function(){
		   this.layout.cleanUp();
	       }
           });
           return AdminPortal;
       });