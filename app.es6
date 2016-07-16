'use strict';

import express from "express";  
import favicon from 'serve-favicon';

let app = express();
const PORT = 3123;

var getTargetPage = (req, page) => {
  let lang = req.headers['accept-language'].toString();
  let targetPage = page + "-en.html";
  let dt = new Date().toUTCString();
  if (lang.search('zh') !== -1) {
    targetPage = page + "-zh.html";
  }
  console.log(`[${dt}] GET - ${page} returns: ${targetPage}`);
  return targetPage;
}

app.get('/', (req, res) => {
  let index = getTargetPage(req, "index");
  res.sendFile(index, {root: "./public"});
})

app.get('/resume', (req, res) => {
  let resume = getTargetPage(req, "resume");
  res.sendFile(resume, {root: "./public"});
})

app.use(express.static(__dirname + "/public"));
app.use(favicon(__dirname + "/public/favicon.ico"));

app.listen(PORT, () => {
  console.log("Listening...")
})