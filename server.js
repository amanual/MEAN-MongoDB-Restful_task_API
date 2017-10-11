const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');
// store the function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app)
//---------------

app.listen(8000, function () {
    console.log("listening on port 8000");
});