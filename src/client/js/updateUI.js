//Variables to change the UI once button is clicked
const firstElement = document.getElementById('agreement');
const secondElement = document.getElementById('subjectivity');
const thirdElement = document.getElementById('confidence');
const fourthElement = document.getElementById('irony');

//Function to update the UI - this retrieves data from our app and dynamically updates the values
const updateUI = async () => {
    
    const request = await fetch('/');
    try {
        const allData = await request.json();
        firstElement.innerHTML = `Agreement: ${allData.agreement}`;
        secondElement.innerHTML = `Subjectivity: ${allData.subjectivity}`;
        thirdElement.innerHTML = `Confidence: ${allData.confidence}`;
        fourthElement.innerHTML = `Irony: ${allData.irony}`;
    }
    catch(error) {
        console.log("error", error);
    }
}

export { updateUI }