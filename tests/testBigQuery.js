import { BigQuery } from "@google-cloud/bigquery";

const bqClient = new BigQuery()

const query = `
    SELECT * FROM your-project.yourdata.yourtable
`

const options = {
    query: query,
}

const [rows] = await bqClient.query(options)

console.log(rows)