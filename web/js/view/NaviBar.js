define(["jquery","./Navi"],function($, Navi){
    var NaviBar = Navi.extend({
        template: function(){
            return temp = $("#navibar").html();
        }
    });
    return NaviBar;
});