const express = require('express');
const path = require('path');
const app = express();
const port = process.env.NODE_APP_PORT || 8080;

// serve static files built by React
app.use(express.static(path.join(__dirname, './dist')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './dist', 'index.html'));
});

app.listen(port, () => {
  console.info('Server started on: ' + port);
});
