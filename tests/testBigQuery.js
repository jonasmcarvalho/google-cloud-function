import { BigQuery } from "@google-cloud/bigquery";

const credentials = {
    keyFilename: './credentials/bigQuery.json',
    projectId: 'your-project'
}

const bqClient = new BigQuery(credentials)

const query = `
    SELECT * FROM your-project.your-data.your-table
`

const options = {
    query: query,
}

const [rows] = await bqClient.query(options)

console.log(rows)