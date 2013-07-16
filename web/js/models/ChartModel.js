define(['backbone'], function(Backbone){
    var ChartModel = Backbone.Model.extend({
        defaults: {
            chart: {
                type: "bar"
            },
            title: {
                text: "bar chart"
            },
            subtitle: {
                text: ""
            },
            xAxis: {
                categories: [],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Y',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' '
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -100,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: '#FFFFFF',
                shadow: true
            },
            credits: {
                enabled: false
            },
            series: [{
                name: '',
                data: [107, 31, 635, 203]
            }, {
                name: 'Weekly status',
                data: [133, 156, 947, 408]
            }]
        },
        initialize: function(){
            
        }
    });
});