// const request = require('request')

const request = require("request")

const geocode = require('./utils/geocode.js')

// const url = 'http://api.weatherstack.com/current?access_key=004acf4a3fc441b96a908b3e0eb32333&query=kasaragod&units=f'

// request({url:url, json: true} , (error, response) => {

//     if(error){
//         console.log(error)
//     }else if (response.body.error){
//         console.log('Unable to find location')
//     }
//     else{
//         console.log(response.body.current.weather_descriptions[0],'.It is currently', response.body.current.temperature,'degrees out.It feels like',
//         response.body.current.feelslike,'degrees out')
//     }
   
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/kasaragod.json?access_token=pk.eyJ1IjoicHJhbmF2bXVuZ2F0aCIsImEiOiJja2QxbHhsanIxNTAwMnVsNzhmZmR3cW4xIn0.-N7437oK_ECe3lzVNhjWgQ'

// request({ url :geocodeURL, json: true}, (error,response) => {

//     if(error){
//         console.log(error)
//     }else if(response.body.features.length===0){
//         console.log('Unable to find location')
//     }else{
//         const latitude = response.body.features[0].center[0]
//         const longitude = response.body.features[0].center[1]
//         console.log(latitude)
//         console.log(longitude)
//     }
    

// })


geocode('kasaragod', (error,data)=>{
    console.log(error)
    console.log(data)
})