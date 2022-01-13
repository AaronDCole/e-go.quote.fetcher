const express = require('express');
const indexRouter = require('./routes/index');

const port = 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.listen(port);

module.exports = app;
