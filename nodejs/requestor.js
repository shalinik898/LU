const http = require('http')
const morgan = require('morgan');


http.createServer((req,res) => {

    res.end('Hello World')

}).listen(3000,'localhost',() =>{
    console.log("Listening on 3000 port");
})

