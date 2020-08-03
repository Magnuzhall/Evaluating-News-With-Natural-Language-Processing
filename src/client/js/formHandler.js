function handleSubmit(event) {
  event.preventDefault()

  //Check the text in the form field
  let formText = document.getElementById('name').value;
  const validUrl = Client.checkForName(formText);

  console.log("::: Form Submitted :::")

  //Submit post request if the URL is valid
  if (validUrl === 0) {
    console.log('Please enter a valid URL')
  } else {
    fetch('http://localhost:8081/test', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({url: formText})
    })
    .then(res => res.json())
    .then(function(res) {
      console.log(res);
      const polarity = res.score_tag;
      const agreement = res.agreement;
      const subjectivity = res.subjectivity;
      const confidence = res.confidence;
      const irony = res.irony;
      document.getElementById('polarity').innerHTML = `Polarity ${polarity}`;
      document.getElementById('agreement').innerHTML = `Agreement ${agreement}`;
      document.getElementById('subjectivity').innerHTML = `Subjectivity ${subjectivity}`;
      document.getElementById('confidence').innerHTML = `Confidence ${confidence}`;
      document.getElementById('irony').innerHTML = `Irony ${irony}`;
    })
  }
}

export { handleSubmit }
