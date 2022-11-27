const express = require("express");

const userRouter = require("../server/routes/userRoute");

const app = express();
const PORT = 3000;
app.use(express.json())

app.use("/users", userRouter);

app.get("/", (req, res) => {
  return res.send("daniyal is a good person");
});

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
