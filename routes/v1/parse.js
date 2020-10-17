const express = require('express')

const routes = function () {

    let parseV1Router = express.Router();

    parseV1Router.route('/')
    .post(async function (req, res) {
        try {
            const firstName = req.body.data.substring(0, 8)
            const lastName = req.body.data.substring(8, 18)
            const clientId = req.body.data.substring(18, 25)

            let returnData  = {
                statusCode : 200,
                data : {
                    "firstName" : firstName,
                    "lastName" : lastName,
                    "clientId" : clientId
                }
            }

            return res.status(200).send(returnData)
         
        } catch (err) {
            return res.status(err.code).send({ statusCode: err.internalCode, message: err.message })
        }
    })

    
    return parseV1Router;
}

module.exports = routes;