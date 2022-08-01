const axios = require('axios');

exports.main = (req, res) => {
  const cep = req.body.cep;
  const url = `https://viacep.com.br/ws/${cep}/json/`;
    
  (async () => {
    try {
      console.log(req)
      const response = await axios.get(url)
      console.log(response.data);
      res.send(response.data)
      // return response.data
    } catch (error) {
      console.log(error.response.body);
    }
  })() 
}