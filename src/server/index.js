const dotenv = require('dotenv');
dotenv.config();

// Setup empty JS object to act as endpoint for all routes
projectData = {};

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

// Spin up the server
const port = 8085;
const server = app.listen(port, listening);
// Callback to debug
function listening() {
    console.log(`Running on port ${port}`);
}

// Initialize all route with a callback function
app.get('/', sendData);

// Callback function to complete GET '/all'
function sendData (request, response) {
    response.sendFile("dist/index.html");
}

// Post Route - adds incoming data to projectData object
app.post('/dataEntry', dataEntry);

function dataEntry (request, response) {
    const d = request.body;
    console.log(d);
    projectData['agreement'] = d.agreement;
    projectData['subjectivity'] = d.subjectivity;
    projectData['confidence'] = d.confidence;
    projectData['irony'] = d.irony;
}

app.get('/', sendInfo);
function sendInfo (request, response) {
    response.send(projectData);
}