define(['backbone', 'app/ChartDataProcessor'], function(Backbone, ChartDataProcessor){
    var GeneralCollection = Backbone.Collection.extend({
        initialize : function(){
            this.subsets = {};
            _.bindAll(this, 'updateSubsets');
            this.bind('sync', this.updateSubsets);
        },
        setSubsetsDefine: function(subsets){
            this.subsetsStrategy = subsets;
            var sb ;
            for(var k in subsets){
                sb = new Backbone.Collection();
                this.subsets[k] = sb;
            }
        },
        getSubset: function(id){
            return this.subsets[id];
        },
        updateSubsets: function(){
            for(var k in this.subsetsStrategy){
                this.subsets[k].reset(this.subsetsStrategy[k].apply(this, [this.models]));
            }
        }
    });
    return GeneralCollection;
});