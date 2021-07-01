const express = require("express");
const app = express();
const morgan = require("morgan");
const path= require("path")

app.set("port", process.env.PORT || 3500);
app.set("view engine",".html");
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname,"views"));
var pushRoutes = require("./routes/push.routes");
// parse application/json
app.use(express.json())
//Middlewares
app.use(morgan("dev"));
app.use("/push", pushRoutes);
module.exports = app;
