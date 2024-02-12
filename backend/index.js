const express = require("express");
const Rootrouter = require('./routes/index')
const cors = require('cors')
const app = express();
const port = 3000;


app.use(cors({
    origin:'https://paytm-copy-client.vercel.app/'
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', Rootrouter)


app.listen(port, () => {
    console.log('server is up and running')
})