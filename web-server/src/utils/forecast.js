const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=004acf4a3fc441b96a908b3e0eb32333&query=' + latitude + ',' + longitude +'&units=m'
    
    request({url, json:true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather serviecs', undefined)
        }else if(body.error){
            callback('Unable to find location.Try another search', undefined)
        }else{
            callback(undefined, body.current.weather_descriptions[0]+'.It is currently '+body.current.temperature+' degrees out.It feels like '+
                   body.current.feelslike+' degrees out')
        }
    })
}

module.exports = forecast