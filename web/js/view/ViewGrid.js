define(['./Grid'], function(Grid){
    var ViewGrid = Grid.extend({
        initialize: function(){
            this.collection.bind('sync','render');
        }
    
    });
    return ViewGrid;
});