var mg = require("mongojs");
var exp = require("express");
var app = exp();
var bp=require("body-parser");
app.use(bp.json());
app.listen(7706);
var cr = require("cors");
app.use(cr());
var con = mg("mongodb://localhost:27017/react_learn");

app.get("/getdata", function(req, res) {
    con.tb1_user.find(function(err, result) {
        if (err) {
            res.send("error");
        } else {
            res.send(result);
        }
    });
});

app.post("/insertdata",function (req,res){
    con.tb1_user.save(req.body)
    res.send({result:"Inserted"})
})

app.post("/removerecord",function(req,res){
    console.log(req.body)
    con.tb1_user.remove(req.body)
    res.send({result:"Deleted"})
})
