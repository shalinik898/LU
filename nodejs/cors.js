const express = require('express');
const app = express();
const cors = require('cors')

const corsOptions = {
    origin: 'https://letsupgrade.in/',
    method: ['GET','POST'],
    preflightContinue : false,
}

app.use(cors());

app.get('/',(req,res)=>{
    res.send("Hello CORS")
});

app.listen(3000,()=>{

    console.log('Server is running on port 3000');

})

