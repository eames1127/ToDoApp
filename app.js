const express = require("express");
app = express();

var path = require('path')

require("dotenv").config();
app.set ("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use("/", require("./Routes/index"));


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
 console.log(`Listening on port : ${PORT}`)
});
 