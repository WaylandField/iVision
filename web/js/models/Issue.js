define(['backbone'],function(Backbone){
    var IssueModel = Backbone.Model.extend({
        defaults:{},
        urlRoot:'/api/issue'
  });
    return IssueModel;
});