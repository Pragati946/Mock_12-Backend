const express = require('express');
const app = express();
const userRouter = require("./routes/user.route");
const connect = require('../Config/db');
app.use(express.json());
const PORT = 8080;
app.use("/user", userRouter);

app.get('/', function (req, res) {
    res.send(("Hello get"));
});

app.listen((PORT), async () => {
    await connect()
    console.log(`Listening on http://localhost:${PORT}`);
});