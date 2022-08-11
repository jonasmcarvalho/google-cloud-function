import { BigQuery } from '@google-cloud/bigquery';
import { getCep } from './src/tools.js';

export const main = (req, res) => {
  const cep = req.body.cep;
  (async () => {
    try {      
      const bigQueryOptions = {
        keyFilename: './credentials/bigQuery.json',
        projectId: 'your-project'
      }
      
      
      let cepsJson = await getCep(cep)
      
      /* const bq = new BigQuery(bigQueryOptions)      
      const responseBigQuery = await bq
                                      .dataset('cep')
                                      .table('cep_list')
                                      .load(cepsJson) */

      console.log(cepsJson)
      res.send(cepsJson)
      
    } catch (error) {      
      console.log(error);
    }
  })() 
}