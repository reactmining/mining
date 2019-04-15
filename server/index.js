const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const app = express();
const schema = require('./schema/schema');
var cors = require('cors')
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('DB Connected');
})
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.listen(2000, () => {
    console.log('Server listening on 4000')
})