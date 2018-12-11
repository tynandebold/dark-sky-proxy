require('dotenv').config();
const express = require('express');
const request = require('superagent');
const cors = require('cors');

const port = process.env.PORT || 3003;
const app = express();

app.use(cors());
app.enable('trust proxy');

app.get('/', (req, res) => {
  res.send('Up and running. Let\'s get some weather.');
});

app.get('/_health', (req, res) => {
  res.json({
    ok: true,
    message: 'Up and running.'
  });
});

app.get('/api/v1/weather', (req, res) => {
  const { latLong, exclude } = req.query;

  request
    .get(`https://api.darksky.net/forecast/${process.env.API_KEY}/${latLong}?exclude=${exclude}`)
    .then(weather => {
      res.status(200).json(weather.body);
    })
    .catch(err => {
      res.status(err.response.statusCode).json(err.response.body);
    });
});

app.listen(port);
console.log(`I'm at http://localhost:${port}`);