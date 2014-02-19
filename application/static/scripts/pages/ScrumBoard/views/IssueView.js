define(["text!pages/ScrumBoard/templates/IssueView.html"],

    function(issueView, SubissueView) {
        return Backbone.View.extend({
            template: _.template(issueView), 
        
            initialize: function(options){
            },
                           
            render: function () {
                this.$el.html(this.template({name: this.model.get('name')})).draggable({
                    revert: "invalid"
                });
                console.log(this.$el.html())
                return this;
            }
        });
    }
);

