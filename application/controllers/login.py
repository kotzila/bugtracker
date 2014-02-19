from controllers.controller import Controller
from models.users import UsersModel


class Login(Controller):
    # constructor
    def __init__(self):
        super(Login, self).__init__()
        self._data = UsersModel()

    # login
    def login(self):
        if self.logged():
            return error("You are already logged")

        email = request.values.get("email")
        password = request.values.get("password")

        if email is not None and \
           password is not None and \
           self._data.valid(email, sha512(password)):
            session["email"] = email
            return write("Well done")
        else:
            return error("Incorrect login or password")

    def fetch(self, **kwargs):
        action = kwargs.get("action")
        param = kwargs.get("param")
        if action is None:
            return render_template("login.html")