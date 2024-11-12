const express = require("express");
const app = express();
const route = require("./Routes/route");
var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/", route);

app.listen(300, () => console.log("Server is running on port 300"));
