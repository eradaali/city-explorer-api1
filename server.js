// const { request, response } = require('express');
const express = require('express');
const weather = require('./data/weather.json');
const app = express() ;
const cors=require('cors');
require('dotenv').config();
const PORT =process.env.PORT;



app.use(cors());
app.get('/',(req,res) =>{res.send('hello world')});

app.get('/weather', (req, res) => { 
    res.json({message :'weather api'});
//  let lat=req.query.lat;
//  let lon=req.query.lon;
//  let searchQuery=req.query.searchQuery;
//  console.log(lat);
//  console.log(lon);
//  console.log(searchQuery);

let findData =()=>{
    let city=weather.find((city,indx)=>{
        return city.city_name.toLowerCase() === searchQuery.toLowerCase()
    })
    console.log(city.data)
    return city.data.map(item =>{
     return new ForeCast(item)
        
    })
}
res.json(findData());

    // res.json(
    //     weather.map((item,idx) =>{
    //         console.log(item.data[idx].valid_date)
    //         return new ForeCast(item.data[idx]);
    //         console.log(data);
    //     })
    // );
    // throw new Error('BROKEN');

});
class ForeCast {
    constructor(weatherData){
        this.date=weatherData.valid_date,
        this.description=weatherData.weather.description
    }
}
 
app.listen(PORT ,()=>{
    console.log(`started at ${PORT}`);
    console.log(PORT);
});