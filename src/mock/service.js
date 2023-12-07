const express = require('express');
const app = express();
app.use(express.json());       // to support JSON-encoded bodies


app.all('*',function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Content-Type, token');
    res.header('Access-Control-Allow-Methods','*');
    res.header('Content-Type','application/json;charset=utf-8');
    next();
})

app.post('/service',function(req,res){

    console.log(req.body)
    res.json({
        name:"hello from mock server:"+ req.body.lang
    });
});

app.post('/langOptions',function(req,res){

    console.log(req.body)
    res.json([
        {
            code:"eng",
            name:"English"
        },{
            code:"fre",
            name:"Frensh"
        },{
            code:"jp",
            name:"Japanese"
        }
    ]);
});

const server = app.listen(8804,function(){
    console.log("server listening on port %d",server.address().port);
})
