let express = require("express");
let route = express.Router();
let {
  getdata,
  data,
  register,
  registerform,
  getname,
} = require("../Controllers/controller");

route.get("/getData/:id", getdata);

route.get("/data", data);

route.post("/register", register);

route.post("/registerform", registerform);

route.get("/getname/:id", getname);

module.exports = route;
