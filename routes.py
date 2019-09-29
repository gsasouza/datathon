from flask import Flask
import utils
import json

app = Flask(__name__)


@app.route("/api/database/costy")
def getcosty():
    return json.dumps(utils.getCostyUsers(utils.computeTravelCosts(utils.flights,
                                                                   utils.users,
                                                                   utils.hotels,
                                                                   utils.nameC), 5))


@app.route("/api/database/expenses")
def getexpenses():
    return json.dumps(utils.getAverageByCompany(utils.flights,
                                     utils.users,
                                     utils.hotels,
                                     utils.nameC))

'''
@app.route("/api/models/cost")
def guesscost():
#call trained model


# call trained model
'''

if __name__ == "__main__":
    app.run(debug=True)
