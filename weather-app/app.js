// const request = require('request')

const request = require("request")

const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast')


geocode('kasaragod', (error,data)=>{
    console.log(error)
    console.log(data)
})

forecast(10,10,(error,data) => {
    console.log(error)
    console.log(data)
})