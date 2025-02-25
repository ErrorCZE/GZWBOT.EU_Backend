const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const https = require("https");
var fs = require("fs");
var cookieParser = require("cookie-parser");
var cookieSession = require("cookie-session");
const axios = require("axios");
const path = require("path");
const compression = require("compression");
require("dotenv").config();

const routes = require('./routes');

app.set("view engine", "ejs");
app.use(express.json({ limit: "100mb" }));
app.use(bodyParser.json({ limit: "100mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "100mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use(express.urlencoded({ extended: true, limit: "100mb" }));
app.use(cookieParser());
app.use(express.static("public"));

function shouldCompress(req, res) {
  if (req.headers["x-no-compression"]) {
    return false;
  }
  const contentType = res.getHeader("Content-Type");
  return !contentType || !contentType.startsWith("image/");
}

app.use(compression({ filter: shouldCompress }));

const httpsOptions = {
  key: fs.readFileSync('etc/cloudflare/private.pem'),
  cert: fs.readFileSync('etc/cloudflare/certificate.pem'),
};

const httpsServer = https.createServer(httpsOptions, app);

httpsServer.listen(2053, () => {
  console.log('HTTPS server listening on port 2053');
});


app.locals.cssVersion = "060520242100";

routes(app);

