define(['app/ChartDataProcessor','highchart'], function(DataProcessor, Highcharts){
    var MockPage = {};
    
    MockPage.home ={
        /** datasource started **/
        dataSource : {
            navis: {url:'/api/navi', type: 'model', id:'1', config:{}},
            issues: {
                url: '/api/issue',
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
            weeklyIssueTable: {
                span:6, UI:'datatable', collection:'issues', 
                title:'Monthly Status', 
                meta: [
                    {id:'host', label: 'Host', sortable: 1, direction: 'asc'},
                    {id: 'changeTime', label: 'change time', sortable: 1}, 
                    {id: 'name', label: 'title', sortable:1}]
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
                    [{span:12, viewId:'weeklyIssueTable'}]
                    /** [{span:12, viewId: 'chart1'}]**/
                ]
            }
        },
        /** data source ended **/
        layout: ['navibar','grid1']
    };

    MockPage.monitor ={
        /** datasource started **/
        dataSource : {
            navis: {url:'/api/navi', type: 'model', id:'1', config:{}},
            issues: {
                url: '/api/issue',
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
 //           issueAutomatic : {UI: 'chart', chart:DataProcessor.autoUpdate()},
            issueStatics : {UI: 'stock'},
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
                    [{span:12, viewId: 'issueStatics'}],
 //                   [{span:12, viewId: 'issueAutomatic'}],
                    [{span:12, viewId:'monthlyIssueTable'}]
                    /** [{span:12, viewId: 'chart1'}]**/
                ]
            }
        },
        /** data source ended **/
        layout: ['navibar','grid1']
    };

    MockPage.alarm ={
        /** datasource started **/
        dataSource : {
            navis: {url:'/api/navi', type: 'model', id:'1', config:{}},
            issues: {
                url: '/api/issue',
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
            weeklyIssueTable: {
                span:6, UI:'datatable', collection:'issues', 
                title:'Monthly Status', 
                meta: [
                    {id:'host', label: 'Host', sortable: 1, direction: 'asc'},
                    {id: 'changeTime', label: 'change time', sortable: 1}, 
                    {id: 'name', label: 'title', sortable:1}]
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
                    [{span:12, viewId: 'issueStatics'}],
                    [{span:6, viewId:'weeklyIssueTable'},
                     {span:6, viewId:'monthlyIssueTable'}],
                    /** [{span:12, viewId: 'chart1'}]**/
                ]
            }
        },
        /** data source ended **/
        layout: ['navibar','grid1']
    };

    MockPage.inventory ={
        /** datasource started **/
        dataSource : {
            navis: {url:'/api/navi', type: 'model', id:'1', config:{}},
            issues: {
                url: '/api/issue',
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
            weeklyIssueTable: {
                span:6, UI:'datatable', collection:'issues', 
                title:'Monthly Status', 
                meta: [
                    {id:'host', label: 'Host', sortable: 1, direction: 'asc'},
                    {id: 'changeTime', label: 'change time', sortable: 1}, 
                    {id: 'name', label: 'title', sortable:1}]
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
                    [{span:12, viewId: 'issueStatics'}],
                    [{span:6, viewId:'weeklyIssueTable'},
                     {span:6, viewId:'monthlyIssueTable'}],
                    /** [{span:12, viewId: 'chart1'}]**/
                ]
            }
        },
        /** data source ended **/
        layout: ['navibar','grid1']
    };

    MockPage.reports ={
        /** datasource started **/
        dataSource : {
            navis: {url:'/api/navi', type: 'model', id:'1', config:{}},
            issues: {
                url: '/api/issue',
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


return MockPage;

});