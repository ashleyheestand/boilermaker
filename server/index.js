const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'public'));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
