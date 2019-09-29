from flask import Flask
import utils
import json

import regression
import userclass

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

@app.route("/api/models/cost")
def guesscost():
    models = regression.trainModels()
    predVals = regression.predict(models[0], models[1])
    return json.dumps(predVals)


@app.route("/api/models/classify")
def classify():
    labels = userclass.trainModels()
    returntype = {'classification' : str(userclass.classifyUser(labels))}
    return json.dumps(returntype)


if __name__ == "__main__":
    app.run(debug=True)
