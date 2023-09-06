const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("views"));

const  emailDB= 'abhilash@gmail.com';
const passwordDB = '1234';

app.post('/login', (req,res)=>{
    console.log(req.body);
    const {email, password}  =req.body;
    if(email === emailDB && password === passwordDB){
        res.send('login sucessful');
    }else{
        res.send('login failed');
    }
})
const PORT = process.env.PORT || 3000;
app.listen(PORT);

