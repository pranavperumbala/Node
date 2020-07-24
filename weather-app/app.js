const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=004acf4a3fc441b96a908b3e0eb32333&query=kasaragod#'

request({url:url, json: true} , (error, response) => {
    console.log(response.body.request)
})