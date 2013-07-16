define(['jquery','backbone','ejs','underscore','bsdatatable'],
       function($, Backbone, ejs, _, Datatable){
           var table = Backbone.View.extend({
               tagName: 'div',
               initialize: function(){
                   _.bindAll(this, "render");
                   this.collection.bind("sync", this.render);
               },
               addRow: function(row){
                   this.rows.push(row);
               },
               render: function(){
                   var template = $("#datatable").html();
                   var html = ejs.render(template, {records:this.collection.toJSON(), meta: this.options.meta});
                   $(this.el).html(html);
	               $('table', this.el).dataTable( {
		               "sDom": "<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6'p>>",
		               "sPaginationType": "bootstrap",
		               "oLanguage": {
			               "sLengthMenu": "_MENU_ records per page"
		               }
	               } );
               }
           });
           return table;
       });