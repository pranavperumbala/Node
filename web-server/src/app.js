const hbs = require('hbs')
const path = require('path')
const express = require('express')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handle bars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory
app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {
    res.render('index', {
        title:'Weather',
        name:'Pranav'
    })
})

app.get('/help',(req,res) => {
    res.render('help', {
        title:'Help',
        helpText:'This is some useful text',
        name:'Pranav'
    })
})

app.get('/about', (req,res) => {
    res.render('about.hbs', {
        title:'About',
        name:'Pranav'
    })
})

app.get('/weather', (req,res) => {
    if(!req.query.address){
       return res.send({
            error:'Please provide an address'
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location}) => {
        if(error){
            return res.send({
                error
            })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return res.send({error})
            }

            res.send({
            forecast: forecastData,
            location,
            address:req.query.address
        })

        })
    })   
})

app.get('/products', (req,res) => {
    if(!req.query.search){
        res.send({
            error:'You must provide a search item'
        })
    }else{
        res.send({
            products:[]
        })
    }
    
})

app.get('/help/*', (req,res) => {
    res.render('404', {
        errorMessage:'Help article not found',
        title:'404',
        name:'Pranav'
    })
})

app.get('*', (req,res) => {
    res.render('404', {
        errorMessage:'Page not found',
        title:'404',
        name:'Pranav'
    })
})




app.listen(3000, () => {
    console.log('Port 3000 is on')
})
