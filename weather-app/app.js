const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast')

const place = process.argv[2]

if(!place){
    console.log('Please provide an adress')
}else{
    geocode(place, (error,{ latitude, longitude, location} = {})=>{

        if(error){
            return console.log(error)
        }
        forecast(latitude,longitude,(error,forecastData) => {
            if(error){
                return console.log(error)
            }
    
            console.log(location)
            console.log(forecastData)
        })
    })
}



