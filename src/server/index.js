const dotenv = require('dotenv');
dotenv.config();

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const { response } = require('express');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile('dist/index.html')
})

const apiKey = process.env.API_KEY;

const port = 8081;
app.listen(port, () => {
    console.log(`The server is running on local host ${port}`);
})

app.post('/test', (req, res) => {
    const url = req.body.url;
    analyzeSentiment(url, apiKey, (data) => {
        res.send(data);
    });
})

const analyzeSentiment = (url, key, callback) => {
    request(`https://api.meaningcloud.com/sentiment-2.1?key=${key}&lang=en&url=${url}`, { json: true })
    if (!err && res.statusCode == 200) {
        callback(body);
    }   else {
        console.log(error);
    }
}
