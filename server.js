const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello Friend')
})

var server = app.listen(5000, function () {
	var port = server.address().port;
	console.log("Server started at http://localhost:%s", port);
});
