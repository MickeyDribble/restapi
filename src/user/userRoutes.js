const { Router } = require("express");
const { addUser, listUsers, deleteUser, updateUser } = require("./userController");
const { hashPass } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPass, addUser);
userRouter.get("/user", listUsers);
userRouter.delete("/user", deleteUser);
userRouter.patch("/user", updateUser);

module.exports = userRouter;