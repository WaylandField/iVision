define(['backbone','highchart', 'app/ChartDataProcessor'], function(Backbone, highstock, DataProcessor){
    var StockView = Backbone.View.extend({
        initialize: function(){},
        render: function(){
            var chart = DataProcessor.highstock();
            $(this.el).highcharts('StockChart', chart);
        }
    });
    return StockView;
});