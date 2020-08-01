// Personal API Key for OpenWeatherMap API
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const apiKey = 'd4c79791d2822a545c90415ba7e01868';
const apiLang = '&lang=en&url=';

//Button to make it all happen
const generateButton = document.querySelector('#generate');

//Async function to make a GET request to the API
const retrieveData = async (url, apikey, apilang, usertext) => {
    const response = await fetch(url+apikey+apilang+usertext);

    try {
        const allData = await response.json();
        return allData;
    }
    catch(error) {
        console.log("error", error);
    }
};

//Async function to make a Post request to add the API data
const postData = async ( url = '', data = {} ) => {

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),     
  });
  
    try {
      const newData = await response.json();
      return newData;
    }
    catch(error) {
      console.log("error", error);
    }
  };

//Add event listener to button with a callback function when button is clicked
generateButton.addEventListener('click', clickedButton);

//Call the GET function 
function clickedButton() {
    //User input variables
    const urlInput = document.querySelector('#urlinput').value;
    retrieveData(baseURL,apiKey,apiLang,urlInput)

    //Chain promise that makes a POST request to add API data and user input
        .then(function(data) {
            console.log(data);
            postData('http://localhost:8085/dataEntry', {agreement: data.agreement, subjectivity: data.subjectivity, confidence: data.confidence, irony: data.irony})
            //Call function to update the UI
            Client.updateUI();
        })      
};

export { clickedButton }