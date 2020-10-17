const express = require('express')

const routes = function () {

    let parseV2Router = express.Router();

    parseV2Router.route('/')
    .post(async function (req, res) {
        try {
            const firstName = req.body.data.substring(0, 4)
            const lastName = req.body.data.substring(8, 15)
            const clientId1 = req.body.data.substring(18, 21)
            const clientId2 = req.body.data.substring(21, 25)

            let returnData  = {
                statusCode : 200,
                data : {
                    "firstName" : firstName,
                    "lastName" : lastName,
                    "clientId" : clientId1 + '-' + clientId2
                }
            }

            return res.status(200).send(returnData)
         
        }
        catch (err) {
            return res.status(err.code).send({ statusCode: err.internalCode, message: err.message })
        }
    })

    
    return parseV2Router;
}

module.exports = routes;