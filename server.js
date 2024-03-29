const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Api running"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`);
});
