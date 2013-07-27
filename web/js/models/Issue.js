define(['backbone'],function(Backbone){
    var IssueModel = Backbone.Model.extend({
        defaults:{},
        urlRoot:'/api/go/issue'
  });
    return IssueModel;
});