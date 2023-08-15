const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');
const blogRoutes = require('./routes/blogRoutes')
const app = express();
const cors = require('cors')

app.use(cors());

//connect to mongodb
const dbURI = 'mongodb+srv://shalinik898:dEdCKLKmtGlmBwkA@node-tutorial.doft8sl.mongodb.net/node-tutorial?retryWrites=true&w=majority' ;

mongoose.connect(dbURI)
.then((result) => app.listen(3000))
// .then((result) => console.log("Connection to database is successfull"))
.catch((err)=>console.log(err));

app.set('view engine','ejs');

// setting up public directory
app.use(express.static('public'));

//middleware encoding for data
app.use(express.urlencoded({extended:true}));

app.use(morgan('dev'));

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


app.get('/',(req,res)=>{
    
    res.redirect('/blogs');
})




app.get('/about',(req,res)=>{
   
    res.render('about',{title:'About'});

})

app.get('/aboutus',(req,res)=>{
    res.redirect('/about',{title:'About'});
})

app.get('/teams',(req,res)=>{
    
    res.render('teams',{title:'Team'});

})






app.use(blogRoutes);


app.use((req,res)=>{

    res.render('404',{title:'Error Page'});



});