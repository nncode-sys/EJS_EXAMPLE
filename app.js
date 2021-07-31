const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");


app.use(bodyParser.urlencoded({extended:true}));
var items=["cook food","eat food","sleep"];

app.get("/", function(req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";
  switch (currentDay) {
    case 1:
      day = "monday";
      break;
    case 2:
      day = "Tuesday";
      break;

    case 3:
      day = "Wednesday";
      break;

    case 4:
      day = "Thursday";
      break;

    case 5:
      day = "friday";
      break;

    case 6:
      day = "Saturday";
      break;

    case 0:
      day = "Sunaday"
      break;
default :
console.log("error");
break;



  }


  res.render("list", {
    kindofday: day,
    newListItem:items
  });

});

app.post("/",function(req,res){
var item=  req.body.newitem;
items.push(item);
res.redirect("/");
})

app.listen(3000, function() {
  console.log("server begin");
});
