define(['jquery','backbone','underscore', 'ejs', 'bootstrap-dropdown'],
       function($, Backbone, _, ejs, bootstrapDropdown){
           var NaviView = Backbone.View.extend({
               tagName: 'div',
               initialize: function(){
                   _.bindAll(this, "template", "render");
                   this.model.bind('change', this.render);
               },
               template: function(){
                   return temp = $("#navi").html();
               },
               render: function(){
                   var html = ejs.render(this.template(), this.model.toJSON());
                   $(this.el).html(html);
                   $('.dropdown-toggle').dropdown();
                   return this;
               }
           });
           return NaviView;
       });