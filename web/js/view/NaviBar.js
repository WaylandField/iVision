define(['jquery','backbone','underscore', 'ejs', 'bootstrap-dropdown'],
       function($, Backbone, _, ejs, bootstrapDropdown){
	   var NaviBar = Backbone.View.extend({
               initialize: function(){
                   _.bindAll(this, "template", "render");
                   this.model.bind('change', this.render);
               },
               template: function(){
		   return temp = $("#navibar").html();
               },
               render: function(){
		   var model = this.model.toJSON();
		   var data = {
		       config:{fixedTop:1,
			       brand: MSGS.app_title}, 
		       menus:[
			   {items: model.menu.items},
			   {config:{right:1, pill:1},
			    items: [
				{divider:1},
				{
				    label:MSGS_FORMAT('name_format', 
						      model.user.firstName, 
						      model.user.mi, 
						      model.user.lastName),
				     icon:'icon-user icon-white',
				     items:[
					 {
					  label:MSGS.log_out,
					  url:'/logout',
					  icon:'icon-eye-open icon-white'}
				     ]}
				   ]}
		       ]
		   };
		   
		   
		   var html = ejs.render(this.template(), data);
		   $(this.el).html(html);
		   $('.dropdown-toggle').dropdown();
		   return this;
               }
	   });
	   return NaviBar;
       });