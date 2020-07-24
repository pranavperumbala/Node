const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=004acf4a3fc441b96a908b3e0eb32333&query=kasaragod&units=f'

request({url:url, json: true} , (error, response) => {
    console.log(response.body.current.weather_descriptions[0],'.It is currently', response.body.current.temperature,'degrees out.It feels like',
    response.body.current.feelslike,'degrees out')
})