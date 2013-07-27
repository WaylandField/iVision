define(["jquery","./Navi"],function($, Navi){
    var NaviBar = Navi.extend({
        template: function(){
            return temp = $("#navibar").html();
        },
        render: function(){
            var html = ejs.render(this.template(), this.model.toJSON());
            $(this.el).html(html);
            $('.dropdown-toggle').dropdown();
            return this;
        }
    });
    return NaviBar;
});