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

  const url = `http://0.0.0.0:8080`;

  // for(i=0; i<60; i++) {
    (async () => {
      try {
        const response = await fetch(url, json)
        const finalRespose = await response.text()
        console.log(finalRespose);
      } catch (error) {
        console.log(error);
      }
    })() 
  // }


  
