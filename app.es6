'use strict';

import express from "express";  
let app = express();
const PORT = 3030;

app.use(express.static("fonts"));

app.get("/", (req, res) => {
  let page = `<h1>THIS IS A PAGE</h1>`
  res.send(page);
});

app.listen(PORT, () => {
  console.log("Listening...")
})