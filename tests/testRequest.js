const axios = require('axios');
const fetch =require('node-fetch');


  const myHeaders = {
    'Content-Type': 'application/json'
  }

  json = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
        cep: '13560-290'
    })
  }  

  const url = `https://southamerica-east1-valiant-carrier-357523.cloudfunctions.net/function-1`;

  (async () => {
    try {
      const response = await fetch(url, json)
      const finalRespose = await response.text()
      console.log(finalRespose);
    } catch (error) {
      console.log(error);
    }
  })() 

