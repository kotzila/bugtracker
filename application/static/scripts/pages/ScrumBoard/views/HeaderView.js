define(["text!pages/ScrumBoard/templates/HeaderView.html"], function(template) {

	return Backbone.View.extend({
		initialize: function(options) {
		},
		
		render: function() {
			$("<div>").text("Header View").appendTo(document.body);
			alert(template);
			return this;
		}
	});

});