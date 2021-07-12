const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello Friend')
})

var server = app.listen(3000, function () {
	var port = server.address().port;
	console.log("Ready Web, port);
});
