from db import DB
from counter import Counter


class Model(object):
    _db = None
    _counter = None

    def __init__(self):
        self._db = DB("mongodb://rv005UI:pass123@troup.mongohq.com:10012/IssueTracker")
        self._db.database("IssueTracker")
        print (self._db.database)

        self._counter = Counter()
        self._counter.create()

