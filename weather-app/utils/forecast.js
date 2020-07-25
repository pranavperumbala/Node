const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=004acf4a3fc441b96a908b3e0eb32333&query=' + latitude + ',' + longitude +'&units=f'
    
    request({url:url, json:true}, (error, response) => {
        if(error){
            callback('Unable to connect to weather serviecs', undefined)
        }else if(response.body.error){
            callback('Unable to find location.Try another search', undefined)
        }else{
            callback(undefined, response.body.current.weather_descriptions[0]+'.It is currently '+response.body.current.temperature+'degrees out.It feels like '+
                   response.body.current.feelslike+'degrees out')
        }
    })
}

module.exports = forecast