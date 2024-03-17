const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require("./index");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
