const express = require('express');
const app = express();

const port = process.env.PORT || 8080;
process.env.PWD = process.cwd();

app.use(express.static(process.env.PWD + '/dist'));

app.listen(port);
