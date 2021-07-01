const express = require('express');
const weather = require('./data/weather.json');
const app = express();
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;
app.use(cors());


app.get('/', (req, res) => { res.send('hello world') });

app.get('/weather', (req, res) => {
    let lat = req.query.lat;
    let lon = req.query.lon;
    let searchQuery = req.query.searchQuery;
    console.log(lat);
    console.log(lon);
    console.log(searchQuery);

    try {
        let findData = () => {
            let city = weather.find((city, indx) => {
                return city.city_name.toLowerCase() === searchQuery.toLowerCase() && city.lat === Number(lat) && city.lon == Number(lon)
            })


            console.log(city)
            return city.data.map(item => {
                return new ForeCast(item)

            })
        }
        res.json(findData());
    }
    catch (err) {

        res.status(500)
        res.send('Error :something went wrong !!')

    }
}
);

class ForeCast {
    constructor(weatherData) {
        this.date = weatherData.valid_date,
            this.description = weatherData.weather.description
    }
}

app.listen(PORT, () => {
    console.log(`started at ${PORT}`);
    console.log(PORT);
});