const express = require('express')
var os = require('os');


console.log(networkInterfaces);
const app = express()
const port = 8080

var networkInterfaces = os.networkInterfaces();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api', (req, res) => {
  console.log('[app-teste] - ' + getIPAddress())
  
  res.json({
    ip: getIPAddress(),
    host: os.hostname(),
    headers: req.headers,
    
  })
})

app.get('/', (req, res) => {
  console.log('[app-teste] - ' + getIPAddress())
  
  res.json({
    ip: getIPAddress(),
    host: os.hostname()
  })
})

function getIPAddress() {
  var interfaces = require('os').networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];

    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal)
        return alias.address;
    }
  }
  return '0.0.0.0';
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})