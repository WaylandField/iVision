define(['jquery','sparkline','backbone'], function($, sparkline, Backbone){
    var InlineChartView = Backbone.View.extend({
        tagName: 'li',
        initialize: function(){

        },
        render: function(){
            var b = this.model.toJSON();
            var html = '<div class="bar p_bar_up p_canvas"><span class="bar"></span></div><div class="ov_boxes"><strong>'+
                b.total +' </strong><br>'+ b.grouper +'</div>';
            $(this.el).html(html);
            $('.bar', this.el).sparkline(b.counts,{type:b.type ,barWidth:'10px', width:'50px', height:'32px'});
            return this;
        }
    });
    return InlineChartView;
});