//create a express server
import express from 'express';
const app = express();
app.get('/Hello',(req,res) =>{
   res.write("Hello response from express server");
   res.end();
});
app.get('/user',(req,res) =>{
    res.write("you will get user details shortly");
    res.end();
 });
 app.get('/userDetails',(req,res) =>{
    var userDetail = ['abc','pwd','xyz'];
    //res.write(userDetail);
    //res.end();
    res.send(userDetail);
 });

 app.get('/prod',(req,res) =>{
   var product = {
    "id" : "P100",
    "name" : "Laptop",
    "Price":56789
   }
   res.send(product);
 });

 app.get('/users/:id',(req,res)=>{
    res.send("good evening !!"+req.params.id)
 })

 app.get('/users1/byId',(req,res)=>{
    const query = req.query.id;
    res.send("user id is - "+query)
 })

 app.post('/loginUser' ,(req,res)=>{
    const object = req.body.user
    res.json({result : object})
 })

 const PORT = 3400;
app.listen(PORT,'127.0.0.1',()=>{
   console.log(`Server is running at port number ${PORT}`);
});