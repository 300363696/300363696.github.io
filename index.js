const express = require('express');
const bodyParser = require('body-parser');
const app = express();
 app.set('view engine', 'ejs');
 app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req, res) {
  
    res.render('bmi', {resultbmi: ""});
  });

  
  app.post("/", function(req, res){
    console.log(req.body);
    var age = req.body.age;
    var weight = req.body.weight;
    var height = Number(req.body.height);
    let result ;
  
    result=[weight / height  / height ] * 10000;

    console.log(result);

 res.render('bmi', {resultbmi: "Your BMI result is : " +result.toFixed(2)});

} )
  
  app.listen(3000, function() {
    console.log("Server running on port 3000.");
  });