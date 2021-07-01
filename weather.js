// const { request, response } = require('express');
const express = require('express');
const app = express() ;
const cors=require('cors');
require('dotenv').config();
const WEATHER_API_KEY =process.env.WEATHER_API_KEY;

const controlWeather=(req,res)=>{
    const weatherUrl = `https://api.weatherbit.io/v2.0/forecast/daily?key=${WEATHER_API_KEY}&lat=${req.query.lat}&lon=${req.query.lon}`;