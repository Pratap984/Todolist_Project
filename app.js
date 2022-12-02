const express = require("express");
const bodyParser = require("body-parser");

const app= express();
var items=["Buy Food","Cook Food","Eat Food"];
var workItems=[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/",function(req,res){
  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  var day= today.toLocaleString("en-US", options);


res.render("list", {listTitle: day,newEntrys: items});
});

app.post("/",function(req,res){
  item=req.body.newItem;

  if(req.body.button === "Work")
  {
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/");

  }


})

app.get("/work",function(req,res)
{
  res.render("list",{listTitle:"Work List",newEntrys:workItems});
});

app.get("/aboutme",function(req,res)
{
  res.render("aboutme");
});
app.listen(3000, function(){
  console.log("Sever started at port 3000");
});
