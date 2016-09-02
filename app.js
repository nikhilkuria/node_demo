var express = require("express"),
    users = require("./lib/users.js"),
    morgan = require("morgan"),
    bodyParser = require("body-parser");

var app = express();

module.exports = app;

app.use(morgan('dev'));
app.use(bodyParser.json());

app.get("/users", function(req,res){
  console.log("Getting list of users");
  users.getUsers(function(err, result){
    if(err){
      return res.status(500).json({ success:false, reason:err.message});
    }else{
      res.send({success:true, users:result});
    }
  });
});

app.get("/users/:id", function(req, res){
  var id = req.params.id;
  console.log("Getting user");
  users.getUser(id, function(err,result){
    if(err){
      return res.status(500).json({ success:false, reason:err.message});
    }else{
      res.send({success:true, user:result});
    }
  });
});

app.post("/users", function(req, res){
  var user = req.body;
  console.log("Adding an User");
  users.addUser(user, function(err, result){
    if(err){
      return res.status(500).json({ success:false, reason:err.message});
    }else {
      res.send({success:true, user:result});
    }
  })
});
