let express = require("express");
let route = express.Router();
let controller = require("../Controllers/user.controller");

route.get("/getUser", controller.getUser);


module.exports = route;
