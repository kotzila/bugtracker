define(["text!pages/ScrumBoard/templates/EditView.html",
        "pages/ScrumBoard/models/Task"],

    function(edit, Task) {
        return Backbone.View.extend({
            template: _.template(edit),

            el: "td .td_edit",

            initialize: function(options){
            },
                           
            render: function () {
                this.$el.append(this.template(this.model.attributes));
                return this;
            }
        });
    }
);
