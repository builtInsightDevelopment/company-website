var express = require('express')
var bodyParser= require('body-parser')
const app = express()

app.use(bodyParser.text());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://builtinsight.co")
  res.header("Vary", "Origin")
  //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})


//app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', (req, res) => {
  console.log(req.body);
   res.send("got a POST request");
  });

app.listen(3000, () => console.log('Example app listening on port 3000!'))