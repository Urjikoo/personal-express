const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs"); // set up ejs for templating
// extended allows to post nested objects
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.post("/calculator", function (req, res) {
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);
  console.log(req.body);
  //   BMI formula US units: BMI = (weight (lb) ÷ height2 (in)) * 703
  var result = weight / (((height / 100) * height) / 100);
  // Calculation: [weight (lb) / height (in) / height (in)] x 703

  res.send("Your BMI is " + result);
});

app.listen(4000, function () {
  console.log("Server is running on port 4000");
});
