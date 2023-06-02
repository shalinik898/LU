const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');

const Blogs = require('./models/blog');

const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://shalinik898:dEdCKLKmtGlmBwkA@node-tutorial.doft8sl.mongodb.net/?retryWrites=true&w=majority' ;

mongoose.connect(dbURI)
.then((result) => app.listen(3000))
// .then((result) => console.log("Connection to database is successfull"))
.catch((err)=>console.log(err));

app.set('view engine','ejs');

// app.set('views','myviews')

// app.listen(3000);

// setting up public directory
app.use(express.static('public'));

//custom middleware

app.use((req,res, next)=>{
    console.log("New request is made:");
    console.log("Host: ",req.hostname);
    console.log("Path: ",req.path);
    console.log("Method: ",req.method);
    next();

})

//app.use(morgan('dev'));

// app.use((req,res, next)=>{
//     console.log("This is next middleware code");
//     next();
// })
app.get('/add-blog',(req,res)=>
    {const blog = new Blogs({
        title: 'new blog',
        preview: 'This is a new blog with mongodb',
        body: 'This is the blog body'

    });

    blog.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>console.log(err))
})

app.get('/all-blogs',(req,res)=>{
    Blogs.find()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.get('/single-blog',(req,res)=>{
    Blogs.findById('6479a27d3342309116b06bb9')
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    })
})




app.get('/',(req,res)=>{
    // res.send('<h1>This is home page </h1>')
    // res.sendFile('./views/index.html',{root:__dirname})

//adding blogs
    const blogs = [
        {blogtitle:'blog 1',previewtext:'This is sample text.',blogcontent:'This is blog content',author:'A1'},
        {blogtitle:'blog 2',previewtext:'This is sample text.',blogcontent:'This is blog content',author:'A2'},
        {blogtitle:'blog 3',previewtext:'This is sample text.',blogcontent:'This is blog content',author:'A3'},
        {blogtitle:'blog 4',previewtext:'This is sample text.',blogcontent:'This is blog content',author:'A4'},
        
    ];

    res.render('index',{title:'Home',blogs});



})


app.get('/about',(req,res)=>{
    //res.send('<h1>This is about page </h1>')
    // res.sendFile('./views/about.html',{root:__dirname})
    res.render('about',{title:'About'});

})

app.get('/aboutus',(req,res)=>{
    //res.send('<h1>This is about page </h1>')
    res.redirect('/about',{title:'About'});
})

app.get('/teams',(req,res)=>{
    //res.send('<h1>This is about page </h1>')
    // res.sendFile('./views/teams.html',{root:__dirname})
    res.render('teams',{title:'Team'});

})

app.get('/blogs/create',(req,res)=>{
    
    res.render('createBlog',{title:'Create'});

})

app.use((req,res)=>{

    // res.sendFile('./views/404.html',{root:__dirname})
    res.render('404',{title:'Error Page'});



})
