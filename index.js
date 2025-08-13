var debug = require("debug")("frontend-code-challenge");
var express = require("express");
const cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var logger = require("./lib/logger");

var items = require("./routes/items");

var app = express();
var log = logger(app);

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// ✅ Serve React build folder
const frontendPath = path.join(__dirname, "static/frontend/build");
app.use(express.static(frontendPath));

// API routes
app.use("/items", items);
app.use("/img", express.static(path.join(__dirname, "static/img")));

// ✅ React catch-all route
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// 404 handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error handler
app.use(function (err, req, res, next) {
  log.error(err);
  res.status(err.status || 500).json({
    message: err.message,
    error: err,
  });
});

app.set("port", process.env.PORT || 3000);

var server = app.listen(app.get("port"), function () {
  log.info(
    "Express server listening on http://localhost:%d",
    server.address().port
  );
});