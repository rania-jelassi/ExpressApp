const express = require("express");
const app = express();
const moment = require("moment");

let time = new Date().getHours();
if (time < 8 || time > 17) {
  app.get("/home.html", (req, res) => {
    console.log("hello");
    res.sendFile("/outOfService.html");
  });
} else {
  app.use(express.static(__dirname));
}
// app.use(express.static(__dirname + "/ourservices.html"));
// res.sendFile("/home.html");
// res.sendFile("/contact.html");
// res.sendFile("/ourservices.html");
// app.use(express.static(__dirname + "home.html"));

// app.get("/contact", function(req, res) {
//   let time = moment();
//   if (time.isBetween(moment("08:00:00"), moment("17:00:00"))) {
//   } else {
//     res.sendFile(__dirname + "/outOfService.html");
//   }
// });

// app.get("/services", function(req, res) {
//   let time = moment();
//   if (time.isBetween(moment("08:00:00"), moment("17:00:00"))) {
//   } else {
//     res.sendFile(__dirname + "/ourservices.html");
//   }
// });

app.listen(3000, err => {
  if (err) console.log("error");
  console.log("server is running port 3000");
});
