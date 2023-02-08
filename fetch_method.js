// This line sends a GET request to the specified URL and returns a Promise

fetch('/json/cats.json')

  // This line waits for the Promise to resolve and returns a response object

  .then(response => {

    // This line converts the response object to a JSON object

    return response.json();

  })

  // This line waits for the previous Promise to resolve and has access to the JSON data

  .then(data => {

    // This line updates the innerHTML of the element with the id 'message' to be the stringified JSON data
    
    document.getElementById('message').innerHTML = JSON.stringify(data);
  })
