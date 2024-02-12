const express = require("express");
const Rootrouter = require('./routes/index')
const cors = require('cors')
const app = express();
const port = 3000;


app.use(cors({
    origin:'https://paytm-copy-client.vercel.app'
}))

app.use((res, req, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', Rootrouter)


app.listen(port, () => {
    console.log('server is up and running')
})