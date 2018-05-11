var express = require('express')
var bodyParser= require('body-parser')
const app = express()

app.use(bodyParser.text());

app.get('/api', (req, res) => res.send('Hello World!'))

app.post('/api', (req, res) => {
  console.log(req.body);
   res.send("got a POST request");
  });

app.listen(3000, () => console.log('Example app listening on port 3000!'))