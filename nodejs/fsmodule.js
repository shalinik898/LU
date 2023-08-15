// const os = require('os')
// console.log(os);
// console.log(os.homedir(),os.platform())

const { log } = require('console');
const fs = require('fs')
// console.log(fs);

// //reading file
// fs.readFile('./blog/blog.txt',(err,data)=>{
// if(err){
//     console.log(err);
// }
// console.log(data);
// console.log(data.toString());

// })

// fs.writeFile('./blog/blog.txt','Updated content',()=>{
//     console.log('File write done') });

//Directory


if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) =>{
        if(err){
            console.log(err);
        }
        console.log("folder created")
    });

}

else{
    fs.rmdir('./assets', (err) =>{
        if(err){
            console.log(err);
        }
        console.log("folder deleted")
    });
}