const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const path = require('path');
const app = express();

app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../dist`));
app.use(express.static(`${__dirname}/../src/about/`)); // images 
app.use(express.static(`${__dirname}/../src/public`)); //css stylesheet 

app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../src/public/index.html`));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
