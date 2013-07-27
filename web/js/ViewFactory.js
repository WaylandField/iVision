define(['backbone', 'view/NaviBar', 'view/Navi','view/IssueStatics', 'view/Grid', 'view/ViewGrid', 'view/InlineChart', 'view/ChartView', 'view/Datatable', 'view/StockView', 'view/LoginForm'], function(Backbone, NaviBar, Navi, IssueStatics, Grid, ViewGrid, InlineChart, ChartView, Datatable, StockView, LoginForm){
    var VIEW_MAPPING = {
        "navibar" : NaviBar,
        "navi" : Navi,
        "grid"    : Grid,
        "viewgrid": ViewGrid,
        "inlinechartview" : InlineChart,
        "chart" :ChartView,
        "issuestatics" :IssueStatics,
        "datatable" : Datatable,
        "stock" : StockView,
	"loginform": LoginForm
    };
    
    var ViewFactory = {};
    
    /** create view by id and data **/
    ViewFactory.createView = function(viewId, options){
        var View = VIEW_MAPPING[viewId.toLowerCase()];
        return new View(options);
    };
    /** end creating view by id and data **/
    
    return ViewFactory;

});