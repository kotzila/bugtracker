define(["text!pages/ScrumBoard/templates/FooterView.html"], 
    function(footerView) {

        return Backbone.View.extend({
	        initialize: function(options){
	        	this.$el.attr("class", "footer"); 
            },

            render: function() {
                this.$el.html(footerView);
                return this;
            }
        })

});

