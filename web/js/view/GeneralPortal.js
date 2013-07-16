define(['backbone',  'app/ViewFactory', 'collections/GeneralCollection'], function(Backbone, ViewFactory, GeneralCollection){
    var GeneralPortal = Backbone.View.extend({
        initialize: function(){
            this.dataSource = {};
            this.views = {};
            this._createDataSource();
            this._createUIList();
            this.loadData();
            this.render();
        },
        _createDataSource : function(){
            var page = this.options.page;
            var dataSourceDef = page.dataSource;
            for(var k in dataSourceDef){
                var dsDef = dataSourceDef[k];
                var newDs;
                if(dsDef.type==='model'){
                    newDs = new Backbone.Model({
                        id: dsDef.id,
                        config: dsDef.config
                    });
                    newDs.urlRoot = dsDef.url;
                }else{
                    newDs = new GeneralCollection();
                    newDs.url = dsDef.url;
                }
                this.dataSource[k] = newDs;
                if(dsDef.subsets){
                    newDs.setSubsetsDefine(dsDef.subsets);
                    for(var kk in dsDef.subsets){
                        this.dataSource[k+'.'+kk] = newDs.getSubset(kk);
                    };
                }
            }
        },
        _createUIList : function(){
            var views = this.options.page.views;
            for(var k in views){
                var viewDef = views[k];
                this.views[k] = this._createUI(viewDef);
            }
        },
        _createUI: function(viewDef){
            var options = this._getViewOptions(viewDef);
            var view = ViewFactory.createView(viewDef.UI, options);
            if(viewDef.rows&&viewDef.rows.length>0){
                for(var i in viewDef.rows){
                    var row = viewDef.rows[i];
                    if(row&&row.length>0){
                        var newRow = [];
                        for(var ii in row){
                            var subView = this.views[row[ii].viewId];
                            if(subView){
                                newRow.push({
                                    config:{title:row[ii].title,span:row[ii].span, offset:row[ii].offset},                                          
                                    view:this.views[row[ii].viewId]
                                });
                            }else{
                                (alert(row[ii].viewId + ' not existed'));
                            }
                         }
                        view.addRow(newRow);
                    }
                }
            }
            return view;
        },
        _getViewOptions : function(viewDef){
            var options = {};
            viewDef.model&&(options.model=this.dataSource[viewDef.model]);
            viewDef.collection&&(options.collection=this.dataSource[viewDef.collection]);
            viewDef.data&&(options.data=this.dataSource[viewDef.data]);
            viewDef.renderTo&&(options.renderTo=viewDef.renderTo);
            viewDef.meta&&(options.meta=viewDef.meta);
            viewDef.UI==='grid'&&(options.isGrid=1);
            viewDef.chart&&(options.chart=viewDef.chart);
            return options;
        },
        loadData: function(){
            for(var k in this.dataSource){
                var ds = this.dataSource[k];
                ds.url&&(ds.fetch());
            }
        },
        render: function(){
            var page = this.options.page;
            var layout = page.layout;
            for(var k in layout){
                var view = this.views[layout[k]];
                if(view){
                    if(view.options['renderTo']&&$(view.options['renderTo'])){
                        $(view.options['renderTo']).html('');
                        $(view.options['renderTo']).append(view.el);
                    }else{
                        $(this.el).html('');
                        $(this.el).append(view.el);
                    }
                    view.options.isGrid && (view.render());
                }else{
                    (alert(layout[k] + ' not existed'));
                }
            }
        }
    });
    return GeneralPortal;
});