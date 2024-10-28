//////// File System
//const fs = require('fs'); //this way we import required module
// //Blocking / synchronous way
// const textInput = fs.readFileSync('./txt/input.txt','utf-8');
// console.log(textInput);

// const textOutput=`This is additional stinrg. ${Date.now()}`;
// fs.writeFileSync('./txt/newfile.txt', textOutput); // newfile.txt will get created and text will be added to file

// //Asynchronous way
// // ()=> is way to define the callback function
// //first 'err' will hold any error that occurred and second data will be the result of executing 
// fs.readFile('./txt/input.txt','utf-8',(err,data1)=> {
//     console.log(data1);
// });

// fs.readFile('./txt/start.txt','utf-8',(err,data1)=> {

//     if(err) return console.log('Error!') ;

//     fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2)=>{
//      console.log(data2);
//         fs.readFile(`./txt/append.txt`,'utf-8',(err,data3)=>{
//         console.log(data3);   
//             fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8', err => { //here we wont get data. so only err
//                 console.log('final.txt file is written');
//             })
//         });
//     });
//  });
// console.log("this will be executed first bacuase in async mode the execution will move further");

/////////// Server and URL configuration
//This is top level code that gets executed  
const fs = require('fs'); 

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf8'); 
const parsedJsonData  =  JSON.parse(data);

const http = require('http');
const url = require('url');  //useful for routing
const server = http.createServer((req,res)=>{  //this is callback function. When request arrives, it is executed as response
    console.log(req.url); //will print the url that are hit in the browser
    
    const path = req.url;
    if(path === '/' || path === '/overview')
        res.end('This is Overview Page! \n');
    else if(path === '/about')
        res.end('This is About Page! \n');
    else if(path === '/api'){
        
        // fs.readFile(`${__dirname}/dev-data/data.json`, 'utf8',(err,data)=>{
        //     const parsedJsonData  =  JSON.parse(data);
       
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(data);
    }
    else
    {
        res.writeHead(404,{'Content-Type':'text/html','my-own-header':'Hello, world from header'});
        res.write('<h1>Page Not Found! </h1>');
        res.end();
    }
    //res.writeHead(200,{'Content-Type':'text/plain'});
    //res.write('Hello World from server! \n');
   // res.end();
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('Server is listening on Port 8000');
})  // compile the app . and then run localhost :8000 on browser. you will get 'Hello World from server!'




