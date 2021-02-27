const express = require('express')
var os = require('os');


console.log(networkInterfaces);
const app = express()
const port = 8080

var networkInterfaces = os.networkInterfaces();

app.get('/', (req, res) => {
  res.send(JSON.stringify(os.networkInterfaces))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})