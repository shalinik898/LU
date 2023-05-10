const express = require('express');

const app = express();

app.set('view-engine','ejs');

app.listen(3000);
app.get('/',(req,res)=>{
    // res.send('<h1>This is home page </h1>')
    res.sendFile('./views/index.html',{root:__dirname})
})

app.get('/about',(req,res)=>{
    //res.send('<h1>This is about page </h1>')
    res.sendFile('./views/about.html',{root:__dirname})
})

app.get('/aboutus',(req,res)=>{
    //res.send('<h1>This is about page </h1>')
    res.redirect('/about');
})

app.get('/teams',(req,res)=>{
    //res.send('<h1>This is about page </h1>')
    res.sendFile('./views/teams.html',{root:__dirname})
})

app.use((req,res)=>{

    res.sendFile('./views/404.html',{root:__dirname})


})