define(["text!pages/Login/templates/LoginTemplate.html"], 
    function(loginView, footerView) {

        return Backbone.View.extend({
            el: "body",
        
            initialize: function(options){
            },
                           
            render: function () {
                this.$(".wrapper").html(loginView);
                return this;
            }
        })

});

