function checkForName(inputText) {
    console.log(" ::: Running checkForName ::: ", inputText);

    //Check if URL is valid
    var res = inputText.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if (inputText === res) {
        alert('Please input a valid URL');
        return 0;
    } else {
        return 1;
    }
}

export { checkForName }
