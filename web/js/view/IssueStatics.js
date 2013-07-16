define(['jquery','backbone','./../collections/IssueCollection', './InlineChart', './Grid'],
       function($, Backbone, IssueCollection, InlineChartView, Grid){
           var IssueStatics = Backbone.View.extend({
               tagName: 'ul',
               className: 'ov_boxes',
               initialize: function(){
                   _.bindAll(this, "render");
                   this.collection.bind('reset',this.render);
               },
               render: function(){
//                   var group = this.collection.getGroupModel();

                   $(this.el).html('');
                   var row = [];
                   for(var h in this.collection.models){
                       var col = {config:{}};
                       var chart = new InlineChartView({model:this.collection.models[h]});
                       col.config.span=3;
                       col.view = chart;
                       $(this.el).append(chart.el);
                       chart.render();
                   }
                   return this;
               }
/**               render: function(){
//                   var group = this.collection.getGroupModel();
                   this.grid = new Grid();
                   $(this.el).append(this.grid.el);

                   var row = [];
                   for(var h in this.collection.models){
                       var col = {config:{}};
                       var chart = new InlineChartView({model:this.collection.models[h]});
                       col.config.span=3;
                       col.view = chart;
                       row.push(col);
                   }
                   this.grid.addRow(row);
                   this.grid.render();
                   return this;
               }
**/
           });
           return IssueStatics;
       });