define(['app/ChartDataProcessor'], function(DataProcessor){
    return {
        /** datasource started **/
        dataSource : {
            navis: {url:'/api/go/navi', type: 'model', id:'2', config:{fixedTop:1}},
            issues: {
                url: '/api/go/issue',
                subsets: {
                    weeklyCount: function(models){
                        return DataProcessor.weeklyGroupCount(models, 'changeTime', 'host');
                    },
                    monthlyCount: function(models){
                        var now = new Date();
                        return _.groupBy(models, function(model){
                            return model.get('host');
                        });
                    }                    
                }
            }
        },
        views: {
            navibar : {UI:'NaviBar', renderTo : '#header', model: 'navis'},
            issueStatics : {UI: 'issueStatics', collection:'issues.weeklyCount'},
            weeklyIssuePie: {
                UI:'chart', collection:'issues.weeklyCount', 
                title:'Monthly Status', chart: DataProcessor.sampleChart()
            },
            weeklyIssueBubble: {
                UI:'chart', collection:'issues.weeklyCount', 
                title:'Monthly Status', chart: DataProcessor.bubble()
            },
            spider: {
                UI:'chart', collection:'issues.weeklyCount', 
                title:'Spider Chart Status', chart: DataProcessor.spider()
            },
            areaChart: {
                UI:'chart', collection:'issues.weeklyCount', 
                title:'Spider Chart Status', chart: DataProcessor.areaChart()
            },
            lines: {
                UI:'chart', collection:'issues.weeklyCount', 
                title:'Spider Chart Status', chart: DataProcessor.lines()
            },
            monthlyIssueTable: {
                span:6, UI:'datatable', collection:'issues', 
                title:'Monthly Status', 
                meta: [
                    {id:'host', label: 'Host', sortable: 1, direction: 'asc'},
                    {id: 'changeTime', label: 'change time', sortable: 1}, 
                    {id: 'name', label: 'title', sortable:1}
                ]
            },
            /**            chart1:{
             UI: 'chartview', type: 'bar', title: '', subtitle: '', xArix: '', yArix:{}, 
             data:'issues.weeklyCount', legend:{shodow: 1}
             },**/
            grid1: {
                UI:'grid', renderTo : '#mainContent',
                rows: [
                    [{span:6, viewId:'weeklyIssuePie'},
                     {span:6, viewId:'areaChart'}],
                    [{span:4, viewId:'spider'},
                     {span:4, viewId:'weeklyIssueBubble'},
                    {span:4, viewId:'lines'}]
                    /** [{span:12, viewId: 'chart1'}]**/
                ]
            }
        },
        /** data source ended **/
        layout: ['navibar','grid1']
    };
});