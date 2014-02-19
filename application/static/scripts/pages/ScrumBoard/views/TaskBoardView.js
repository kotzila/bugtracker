define(["text!pages/ScrumBoard/templates/TaskBoardView.html",
        "pages/ScrumBoard/collections/Tasks",
        "pages/ScrumBoard/models/Task",
        "pages/ScrumBoard/views/IssueView",
        "pages/ScrumBoard/collections/Subissues",
        "pages/ScrumBoard/models/Subissue",
        "pages/ScrumBoard/views/SubissueView"],

	function(taskBoardTemplate, Tasks, Task, IssueView, Subissues, Subissue, SubissueView){

        return some = Backbone.View.extend({ 
            name: "TaskBoardView",

            template: _.template(taskBoardTemplate), 

            initialize: function(options){
                this.$el.attr("class", "sprint_wrapper");                            
                this.tasks = new Tasks();
                this.subissues = new Subissues();
            },            

            render: function() {

                var that = this;
                var $todo = $('<div/>',{class: "todo"}).append('<h3 class="column-title">To do</h3><hr /><br />').droppable({                                       
                    drop: handleDrop
                });
                var $doing = $('<div/>',{class: "doing"}).append('<h3 class="column-title">Doing</h3><hr /><br />').droppable({
                    drop: handleDrop
                });
                var $done = $('<div/>',{class: "done"}).append('<h3 class="column-title">Done</h3><hr /><br />').droppable({
                    drop: handleDrop
                });
                this.$el.append($todo, $doing, $done);

                that.tasks.fetch({
                    success: function (data, response, options) {
                        that.renderTasks();
                        that.subissues.fetch({
                            success: function(collection, response, options) {
                                that.renderSubissues();
                            }
                        });
                    }
                });
                return this;
			},

			renderTasks: function() {
			    var that = this;                
			    that.tasks.each(function(task) {
			        var issue = new IssueView({
			            model: task
		            });
                    //console.log(issue.model.attributes.status);
                    var status = issue.model.attributes.status
                    switch(status){
                        case "todo": that.$el.find(".todo").append(issue.render().el); break;
                        case "doing": that.$el.find(".doing").append(issue.render().el); break;
                        case "done": that.$el.find(".done").append(issue.render().el); break;
                    }                                        
                    
			    });

			},

            renderSubissues: function() {
                this.subissues.each(function(subissue) {
                    var subissueView = new SubissueView({
                        model: subissue
                    });
                    this.$el.append(subissueView.render().el);
                }, this);
            }

            
        });

    }
);	

function handleDrop(event, ui){
    var clone = $(ui.helper);
    clone.css("left", "0");
    clone.css("top", "0");
    //var offset = clone.offset();
    //clone.offset({ top: offset.top, left: offset.left})

    console.log(ui.helper);
    $(this).append(clone);
    //ui.draggable.detach().appendTo($(this));
    //$(ui.draggable).appendTo()
    console.log(event);
}
