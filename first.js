// const http = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// const fs= require("fs");
// let text=fs.readFile('dele.txt','utf-8',  (err,data)=>{
//   console.log(this);
// });
// // text=text.replace('world','Era');

// console.log("this content of the file is");
// // console.log(text);

// // console.log("cerating a new file....");
// // fs.writeFileSync("Era.txt",text);

const http=require("http");
const fs=require("fs");
const fileContont=fs.readFileSync("index.html");
const server=http.createServer((req,res)=>{
  res.writeHead(200,{"Content-type":"text/html"})
  res.end(fileContont);
})
server.listen(8000,"127.0.0.2",()=>{
  console.log("Listening on the port 80");
})