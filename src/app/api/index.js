const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.static(__dirname + '/client/build'));

app.get('/events/:city', async (req, res) => {
    const events = [];
    let { data } = await axios.get(`http://api.eventful.com/json/events/search?app_key=ENV[EVENT_KEY]?...&location=${req.params.city}&date=today`)
    events.push(data)
    res.set('Access-Control-Allow-Origin', 'http://localhost:4200')
    res.json(events)
})
app.get('/events/:city/category/:category', async (req, res) => {
    const events = [];
    let { data } = await axios.get(`http://api.eventful.com/json/events/search?app_key=ENV[EVENT_KEY]&?...&location=${req.params.city}&category=${req.params.category}&date=today`)
    events.push(data)
    res.json(events)
})
app.get('/img/:keyword', async (req, res) => {
    let i = Math.floor(Math.random() * 10)
    let { data } = await axios.get(`https://api.unsplash.com/search/photos?&query=${req.params.keyword}&page=${i}&client_id=e6fc74ee151383d272e0baa254236693152d29360832effd93b02ef2f867dae6`)
    res.set('Access-Control-Allow-Origin', 'http://localhost:4200')
    res.send(data)
})

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Listening on port " + PORT));
