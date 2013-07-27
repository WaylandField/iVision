define(["backbone"],function(Backbone){
    var NaviModel = Backbone.Model.extend({
        defaults:{
            label:"",
            items:[],
            config:{}
        },
        urlRoot:'/api/go/navi'
    });
    return NaviModel;
});