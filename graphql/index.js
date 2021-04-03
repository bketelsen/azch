const fetch = require('sync-fetch')

const jsonGraphqlExpress = require('json-graphql-server');


const data = fetch('https://github.com/bketelsen/bkml/releases/download/blox/data.json').json();
const app = require('express')();


app.use('/api/graphql', jsonGraphqlExpress(data));
console.log(data);

const PORT = process.env.FUNCTIONS_HTTPWORKER_PORT;

module.exports = app.listen(PORT, () => console.log(`Server running on ${port}, http://localhost:${port}`));