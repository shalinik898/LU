const http = require('http');
const fs = require('fs');
const _=require('lodash');

const server = http.createServer((req,res)=>{
// console.log("Request is created");
// console.log(req.url,req.method);
// res.setHeader('Context-Type', 'text/plain')

const welcomeGreet = _.once(()=>{
    console.log("Welcome Greet Two");
})

welcomeGreet();

welcomeGreet();

res.setHeader('Context-Type', 'html')

// res.write("<h1>Node js</h1>");
// res.write("<p>Welcometo Node js</p>");
// res.write("Request and Response");

// res.end();
// 

let path ="./views/"
switch(req.url){
    case '/':
        path += 'index.html';
        res.statusCode=200;
        break;
    case '/about':
        path += 'about.html';
        break;
    case '/aboutus':
        res.statusCode=301;
        res.setHeader('Location','/about')
        res.end();
        break;

    case '/teams':
        path += 'teams.html';
        break;
    case '/team':
            res.statusCode=301;
            res.setHeader('Location','/teams')
            res.end();
            break;
    case '/ourteam':
                    res.statusCode=301;
                res.setHeader('Location','/teams')
                res.end();
                break;
   
    default:
        path += '404.html';
        res.statusCode=404;
        break;

}

// fs.readFile('./views/index.html',(err,data)=>{
    fs.readFile(path,(err,data)=>{
    
    if(err){

        console.log(err);

    } else{
        res.write(data);
        res.end();
    }
})

});   


 server.listen(3000,'localhost',()=>{
    console.log('Listening for request done on port 3000')

});   

