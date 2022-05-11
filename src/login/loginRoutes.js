const { Router } = require("express");
const { unHashPass } = require("../middleware");
const loginRouter = Router();

loginRouter.post("/login", unHashPass)

module.exports = loginRouter