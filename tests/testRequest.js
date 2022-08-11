import fetch from 'node-fetch'


  const myHeaders = {
    'Content-Type': 'application/json'
  }

  let json = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        cep: ['15960000', '15803145']
      })
    }
  

  const url = `http://0.0.0.0:8080`;
  
  (async () => {
    try {
      const response = await fetch(url, json)
      const finalRespose = await response.text()
      console.log(finalRespose);
    } catch (error) {
      console.log(error);
    }
  })() 
  


  
