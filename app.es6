'use strict';

import express from "express";  
import favicon from 'serve-favicon';

let app = express();
const PORT = 3123;

app.use(express.static(__dirname + "/public"));
app.use(favicon(__dirname + "/public/favicon.ico"));

app.listen(PORT, () => {
  console.log("Listening...")
})