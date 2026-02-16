const expres=require("express");
const app=expres();
const fs=require("fs");
const port=5000;

app.use(expres.json());
app.use(expres.urlencoded({extended:true}));

app.get("/", (req,res)=>{
    res.send("Hey");
});


app.listen(port,(err,data)=>{
    if(err){
        console.log(`error occoured ${port}`);
    }
        console.log(`server is running on ${port}`);

});
