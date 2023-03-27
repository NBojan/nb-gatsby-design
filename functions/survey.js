const Airtable = require('airtable-node');
require("dotenv").config();

const airtable = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_KEY })
  .base(process.env.GATSBY_AIRTABLE_BASE)
  .table('Survey')

exports.handler = async ( event, context ) => {
    if(event.httpMethod === "GET"){
        const data = await airtable.list({ maxRecords: 100 });
        if(data.records){
            const surveyReturn = data.records.map(record => {
                const { id, fields } = record;
                return { id, fields }
            })
            return {
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                statusCode: 200,
                body: JSON.stringify(surveyReturn)
            }
        }
        else {
            const errorType = `there is an error: ${data.error.type}`;
            return {
                statusCode: 500,
                body: JSON.stringify(errorType)
            }
        }
    }
    
    else if(event.httpMethod === "POST"){
        const providedValues = JSON.parse(event.body);
        const { id, fields: { name, votes } } = providedValues;

        if(id && name && votes && typeof votes === "number"){
            const updateReturn = await airtable.update(id, {name, votes});
            if(updateReturn.error){
                const errorType = `there is an error: ${data.error.type}`;
                return {
                    statusCode: 500,
                    body: JSON.stringify(errorType)
                }
            }
            return {
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                statusCode: 200,
                body: JSON.stringify(updateReturn)
            }
        }

        else {
            return {
                statusCode: 500,
                body: "please provide the necessary values {id, fields: {name, votes}}"
            }
        }
    }
}