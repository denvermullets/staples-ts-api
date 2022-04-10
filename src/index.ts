import express from "express";

const app = express();

const port = process.env.PORT || 3001;

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`99-Staples API listening on ${port}`);
});
