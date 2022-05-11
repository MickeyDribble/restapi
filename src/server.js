require("./db/connection");
const express = require("express");
const movieRouter = require("./movie/movieRoutes");
const userRouter = require("./user/userRoutes");
const loginRouter = require("./login/loginRoutes");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use(movieRouter);

app.use(userRouter);

app.use(loginRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});