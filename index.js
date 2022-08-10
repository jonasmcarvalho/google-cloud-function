import axios from 'axios';
import { BigQuery } from '@google-cloud/bigquery';

export const main = (req, res) => {
  const cep = req.body.cep;
  const url = `https://viacep.com.br/ws/${cep}/json/`;
    
  (async () => {
    try {
      bq = new BigQuery()      
      
      const response = await axios.get(url)
      console.log(response.data);
      res.send(response.data)
      
    } catch (error) {
      console.log(error.response.body);
    }
  })() 
}