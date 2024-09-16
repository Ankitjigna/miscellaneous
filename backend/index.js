const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port,()=>{
    console.log(`app is listening on port:${port}`);
});

app.get("/register",(req,res)=>{
    let {user,password}=req.query;
    res.send(`get response.welcome to @${user}`);
});

app.post("/register",(req,res)=>{
    let {user,password}=req.body;
    res.send(`post response,welcome @${user}`);
});