define(['jquery','backbone'],
       function($, Backbone){
           var Grid = Backbone.View.extend({
               tagName: 'div',
               initialize: function(){
                   this.rows=[];
               },
               addRow: function(row){
                   this.rows.push(row);
               },
               prepareLayout : function(){
                   for(var row in this.rows){
                       var rowEle = document.createElement('div');
                       $(this.el).append(rowEle);
                       $(rowEle).addClass("row-fluid");
                       for(var i in this.rows[row]){
                           var col = this.rows[row][i];
                           var colEle = document.createElement('div');
                           $(rowEle).append(colEle);
                           col.config&&col.config.span&&($(colEle).addClass('span'+col.config.span));
                           col.config&&col.config.offset&&($(colEle).addClass('offset'+col.config.offset));
                           col.config&&col.config.css&&($(colEle).addClass(col.config.css));
                           if(col.config&&col.config.title){
                               var h3 = document.createElement('h3');
                               $(h3).text(col.config.title).addClass('heading');
                               $(colEle).append(h3);
                           }
                           col.view&&col.view&&($(colEle).append(col.view.el));
                       }

                   }
                   return this;
               },
               render: function(){
                   this.prepareLayout();
                   for(var row in this.rows){
                       for(var i in this.rows[row]){
                           var col = this.rows[row][i];
                           col.view&&col.view&&(col.view.render());
                       }

                   }
                    return this;
               },
	       cleanUp: function(){
                   for(var row in this.rows){
                       for(var i in this.rows[row]){
                           var col = this.rows[row][i];
                           if(col&&col.view){
			       if(col.view.cleanUp){
				   col.view.cleanUp();
			       }else{
				   col.view.remove();
			       }
			   }
                       }
                   }
		   
	       }
           });
           return Grid;
       });