const fs = require('fs');

const readStream = fs.createReadStream('./blog/blogThree.txt');
// readStream.on('data',(chunkOfData)=>{
//     console.log("The chunk of data recieved");
//     console.log(chunkOfData);

//     const writeStream = fs.createWriteStream('./blog/blogFour.txt');
//     writeStream.write("Updated content using write steam");
//     writeStream.write(chunkOfData);


// });
    const writeStream = fs.createWriteStream('./blog/blogFour.txt');

    readStream.pipe(writeStream);
