define(['backbone','./../models/Issue'],function(Backbone, IssueModel){
    var IssueCollection = Backbone.Collection.extend({
        model: IssueModel,
        url:'/api/issue',
        initialize: function(){
            this.dataStrategy = [];
            if(this.options&&this.options.dataStrategy){
                this.dataStrategy = [];
            }
            this.dataMap = {};
            this.bind('sync', this.prepareData);
        },
        getChartData: function(){
            var result = {};
            result = _.countBy(this.models, function(model){
                return model.get('host');
            });
            return result;
        },
        getGroupModel: function(){
            var now = new Date();
            var weeklyIssues = _.filter(this.models, function(model){
                var lastWeek=now.getTime()-86400000*7;
                return model.get('changeTime')>lastWeek;
            });
            weeklyIssues = _.groupBy(weeklyIssues, function(model){
                return model.get('host');
            });
            var result = [];
            for(var k in weeklyIssues){
                var temp = {};
                temp.host= k;
                temp.type = "bar";
                temp.label = "Weekly Statistics";
                temp.count= weeklyIssues[k].length;
                temp.group= _.countBy(weeklyIssues[k], function(model){
                    return Math.ceil((now.getTime()-model.get('changeTime'))/86400000);
                });
                temp.chart = [];
                var index=7;
                while(index-->0){
                    temp.chart.push(temp.group[index]?temp.group[index]:0);
                }
                result.push(new Backbone.Model(temp));
            }
            return result;
        }
    });
    return IssueCollection;
});