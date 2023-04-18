/* const { response } = require('express');
const express = require('express');
const https = require('https');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
    
})
app.post('/', (req,res)=>{
    
    const querry = req.body.cityName
        const apiKey = 'b1300a73d668d85ca3a85b24d6f44159'
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + querry +'&appid='+apiKey+'&units=metric'
        https.get(url, (response)=>{
     //console.log(response.statusCode);
       response.on('data', (data)=>{
        //console.log('data');
        const weatherData = JSON.parse(data);
        //console.log(weatherData);
        const temp = weatherData.main.temp;
        const discription = weatherData.weather[0].description
        //console.log(discription)
        res.write("<h1>The temperature in  "+querry+ " is " + temp + " degree celcius</h1>")
        res.write("<p>the weather discription is " + discription + "</p>")
       })
       })
          })

app.listen(4000, ()=> console.log("Your server is running at port 4000")) */

const express = require('express');
const https = require('https');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname));
app.post('/', (req,res)=>{
    const query = req.body.cityName;
    const apiKey = 'b1300a73d668d85ca3a85b24d6f44159';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + query +'&appid='+apiKey+'&units=metric';
    https.get(url, (response)=>{
        response.on('data', (data)=>{
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            res.write("<h1>The temperature in  "+query+ " is " + temp + " degree celcius</h1>");
            res.write("<p>The weather description is " + description + "</p>");
            res.send();
        })
    })
})

app.listen(4000, ()=> console.log("Your server is running at port 4000"));
