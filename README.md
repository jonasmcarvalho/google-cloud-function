# Cloud Function to extract CEP by API Via CEP

## To run locally, run the following commands in sequence in the terminal:

#### npm install
#### npm run dev

## *requisition template*

```
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

  (async () => {
    try {
      const response = await fetch(url, json)
      const finalRespose = await response.text()
      console.log(finalRespose);
    } catch (error) {
      console.log(error);
    }
  })() 
```