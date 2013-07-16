define(['jquery', 'backbone','highchart-more', 'underscore', 'app/ChartDataProcessor'], function($, Backbone, Highchart, _, DataProcessor){
    var ChartView = Backbone.View.extend({
        initialize: function(){
            _.bindAll(this, 'render');
            this.collection.bind('sync', this.render);
        },
        render: function(){
            //var chart = DataProcessor.process(this.collection.getChartData(), this.options.chart);
            var chart = this.options.chart;
            $(this.el).highcharts(chart);
        }
    });
    return ChartView;
});