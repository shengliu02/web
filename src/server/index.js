const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const path = require('path');
const app = express();
const msg = require('./routes/message');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(`${__dirname}/../../dist`));
app.use(express.static(`${__dirname}/../about`)); // images
app.use(express.static(`${__dirname}/../public`)); // property files

// app.use('/msgboard_api',msg);
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(`${__dirname}/../public/index.html`));
// });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
