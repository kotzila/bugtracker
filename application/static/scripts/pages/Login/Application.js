define(["pages/Login/views/LoginView"],         
    function(LoginView) {
        var _public = {};
        var _private = {};

        _public.start = function() {
            _private.loginView = new LoginView();
            Backbone.history.start();
        };

        return _public;
    }
);
