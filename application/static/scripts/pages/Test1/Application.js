define(["pages/ScrumBoard/views/TestTableView"],         
    function(TableView) {
        var _public = {};
        var _private = {};
        _public.start = function() {
            _private.tableView = new TableView();
            _private.tableView.render().el;
        };

        return _public;
    }
);
