
// //HTTP: For creating HTTP servers and clients.
// const http = require('http');

// //File System (fs): For interacting with the file system.
// const fs = require('fs');
// //Path: For handling and transforming file paths.
// const path = require('path');

// //Server Instantitate
// const express = require('express');
// const app = express();
// //xios
// const axios = require('axios');
// //dot env
// require('dotenv').config();
// //body parsing
// app.use(express.json());

// //Active the server at 5000 port
// app.listen(5000, ()=>{
//     console.log("server started at port no. 5000");
// });


// //Routes
// app.get('/',(req, res)=>{
//     res.send("Hello Jee ,Kaise ho Saree!");
// })


// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/myDatabse',{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })
// .then(() =>{console.log(" dataBase connected successfully");})
// .catch((error) =>{console.log("recive an error");})








// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });

// function name(name){
//   return `helo ${name}`;
// }

// const printName = name("Shuvankar");
// console.log(printName);

// Creating a Buffer 
// const buffer = Buffer.from('Hello, World!');

// // Printing the contents of the Buffer
// console.log(buffer); 

// // Converting the Buffer to a string
// console.log(buffer.toString('ascii')); 


// import calculation
// const {add, multiplication} = require('./calculation')

// console.log("sum of tow number is:-" ,add(3,4));
// console.log("multiplication of tow number is:-" ,multiplication(5,4));



//file system

// const fs = require('fs');

//synchronously create
// fs.writeFileSync("./test.txt","Hii ,Good Morning  Shuvankar");


//async 
// fs.writeFile("./test.txt","Hii ,hello world",(err)=>{
//   console.log(err)
// })


//read file

// const result = fs.readFileSync("./address.txt","utf-8");
// console.log(result);

//async
// fs.readFile("./address.txt","utf-8",(err,result)=>{
//   if(err){
//     console.log(err)
//   }
//   else{
//     console.log(result)
//   }
// })


//open file
// fs.open("./address.txt", 'r',()=>{
//   console.log("file Open successfully")
// })

//delete a  file

// fs.unlink('address.txt', (err) => {
//   if (err) {
//     console.error('Error deleting file:', err);
//     return;
//   }
//   console.log('File deleted successfully');
// });

//Renaming file

// const fs = require('fs');

// fs.rename('details.txt', 'temp.txt', (err) => {
//   if (err) {
//     console.error('Error renaming file:', err);
//     return;
//   }
//   console.log('File renamed successfully');
// });


// //copy file

// fs.copyFile('temp.txt', 'destination.txt', (err) => {
//   if (err) {
//     console.error('Error copying file:', err);
//     return;
//   }
//   console.log('File copied successfully');
// });


//Array Buffer

// const bufferArray = Buffer.from([1, 2, 3, 4, 5]); 
// console.log(bufferArray);


// //buffer from string
// const bufferString = Buffer.from('Hello, World!', 'utf8'); // Creates a buffer from a string
// console.log(bufferString);


// writing Buffer

// const buffer = Buffer.alloc(20);
// buffer.write('Mern stack developer', 0, 'utf8');
// console.log(buffer.toString('utf8')); 


// Reading Buffer
// const buffer = Buffer.from('Good Morning Guys', 'utf8');
// console.log(buffer.toString('utf8', 0, 12)); 


// const buffer = Buffer.from('Have A Grate Day', 'utf8');
// const result = buffer.slice(0, 6);
// console.log(result.toString()); 


// concatinate buffer

// const buffer1 = Buffer.from('Good ');
// const buffer2 = Buffer.from('Moorning');
// const concatenate = Buffer.concat([buffer1, buffer2]);
// console.log(concatenate.toString()); 


//readable stream

// const fs = require('fs');

// const readableStream = fs.createReadStream('temp.txt', { encoding: 'utf8' });

// readableStream.on('data', (value) => {
//   console.log('Received data:', value);
// });

// readableStream.on('end', () => {
//   console.log('No more data.');
// });

// readableStream.on('error', (err) => {
//   console.error('An error occurred:', err);
// });


//write stream

// const fs = require('fs');

// const writableStream = fs.createWriteStream('output.txt');

// writableStream.write('Hi! Shuvankar ');
// writableStream.write('Do your job');
// writableStream.end(); 


// writableStream.on('finish', () => {
//   console.log('Writing Done');
// });
// writableStream.on('error', (err) => {
//   console.error('An error occurred:', err);
// });


//Flow Control

// const fs = require('fs');

// const readableStream = fs.createReadStream('temp.txt', { encoding: 'utf8' });

// readableStream.on('data', (data) => {
//   console.log('Received data:', data);
//   readableStream.pause(); 

//   setTimeout(() => {
//     console.log('Resuming the stream');
//     readableStream.resume();
//   }, 1000); 
// });

// readableStream.on('end', () => {
//   console.log('No more data.');
// });

// readableStream.on('error', (err) => {
//   console.error('An error occurred:', err);
// });


//pipe
// const fs = require('fs');
// const readableStream = fs.createReadStream('temp.txt');

// const writableStream = fs.createWriteStream('output2.txt');

// readableStream.pipe(writableStream);
// // Handle the 'finish' event for the writable stream
// writableStream.on('finish', () => {
//   console.log('Work done');
// });

// // Handle errors
// readableStream.on('error', (err) => {
//   console.error('An error occurred with the readable stream:', err);
// });

// writableStream.on('error', (err) => {
//   console.error('An error occurred with the writable stream:', err);
// });


//Duplex
// const { Duplex } = require('stream');

// class MyDuplexStream extends Duplex {
//   constructor(options) {
//     super(options);
//   }

//   _write(chunk, encoding, callback) {
//     console.log('Received data:', chunk.toString());
//     callback();
//   }

//   _read(size) {
//     // Implement the read operation
//     this.push('Hello from Duplex stream!');
//     this.push(null);
//   }
// }

// const myDuplexStream = new MyDuplexStream();
// myDuplexStream.pipe(process.stdout);


//transform stream
// const { Transform } = require('stream');

// class MyTransformStream extends Transform {
//   constructor(options) {
//     super(options);
//   }

//   _transform(chunk, encoding, callback) {
//     const transformedChunk = chunk.toString().toUpperCase();
//     this.push(transformedChunk);
//     callback();
//   }
// }

// const myTransformStream = new MyTransformStream();
// process.stdin.pipe(myTransformStream).pipe(process.stdout);

// const fs = require('fs');

// fs.copyFile('temp1.txt', 'destination.txt', (err) => {
//   if (err) {
//     console.error('Error copying file:', err);
//     return;
//   }
//   console.log('File copied successfully');
// });



// const EventEmitter = require('events');

// // Create a custom EventEmitter
// const myEmitter = new EventEmitter();

// // Simulate an error condition
// const errorCondition = true;

// if (errorCondition) {
//   // Emit an 'error' event with an error object
//   myEmitter.emit('error', new Error('An error occurred here'));
// }



// const domain = require('domain');

// // Create a domain
// const myDomain = domain.create();

// // Attach an error handler to the domain
// myDomain.on('error', (err) => {
//   console.error('Error caught by domain:', err.message);
// });

// // Run code within the domain
// myDomain.run(() => {
//   // Simulate an error
//   throw new Error('Simulated error within domain');
// });


// const EventEmitter = require('events');

// const myEmitter = new EventEmitter();

// const myEventHandler = () => {
//   console.log('Event started now!');
// };

// myEmitter.on('myEvent', myEventHandler);

// myEmitter.emit('myEvent'); 


// const EventEmitter = require('events');
// class CustomEmitter extends EventEmitter {
//   constructor() {
//     super();
//   }

//   triggerEvent(data) {
//     // Emit the custom event
//     this.emit('customEvent', data);
//   }
// }

// const myEmitter = new CustomEmitter();

// myEmitter.on('customEvent', (data) => {
//   console.log('Custom event received with data:', data);
// });

// myEmitter.triggerEvent('Grate day');




// const EventEmitter = require('events');

// function createEventEmitter() {
//   return new EventEmitter();
// }

// const emitter = createEventEmitter();

// emitter.on('customEvent', (data) => {
//   console.log('Custom event received with data:', data);
// });

// emitter.emit('customEvent', 'Hello, world!');
// const express = require('express');
// const app = express();
// const EventEmitter = require('events');


// const myEmitter = new EventEmitter();
// const eventHandler = (data) => {
//   console.log('Event occurred with :', data);
// };

// myEmitter.on('myEvent', eventHandler);

// myEmitter.emit('myEvent', 'Hello, world!');




// const port = 4000;
// app.listen(port, ()=>{
//   console.log("serverstarted at port " ,port);
// })
// // body parsing
// app.use(express.json());


// app.get('/', (req, res) => {
//   res.send('Hello, world!');
// });
// app.post('/api/login', (request,response) => {
//   const {name, email} = request.body;
//   console.log(name);
//   console.log(email);
//   response.send("Login successful")
// })

// const EventEmitter = require('events');

// const myEmitter = new EventEmitter();


// const onCustomEvent = (data) => {
//   console.log('Custom event occurred with data:', data);
// };

// myEmitter.on('customEvent', onCustomEvent);

// myEmitter.emit('customEvent', { key: 'value' });

// myEmitter.emit('customEvent', { anotherKey: 'anotherValue' });


// const  express = require('express');
// const app = express();
// const PORT = 4000;
// app.use(express.json());

// app.listen(PORT, ()=>{
//   console.log("app started at port",PORT)
// });
// app.get('/', (req, res) => {
//     res.send('Hello, world!');
//     console.log("Have a grate day")
//   });

// app.post("/api/v1/login",(req,res)=>{
//   const {email,password} = req.body;
//   console.log(email);
//   console.log(password);

//   return res.status(200).json({
//     success: true,
//     message: "user login successfully"
//   })
// })


// const express = require('express');
// const app = express();

// // Set EJS as the view engine
// app.set('view engine', 'ejs');
// app.set('views', './views');  // Optional if views are in the default 'views' folder

// // Define a route
// app.get('/', (req, res) => {
//   res.render('layout', {
//     title: 'Home Page',
//     body: 'hello'
//   });
// });


// app.listen(4000, () => {
//   console.log('Server is running on port 4000');
// });
// const express = require('express');
// const app = express();

// // Set EJS as the view engine
// app.set('view engine', 'ejs');
// app.set('views', './views');

// // Define a route
// app.get('/', (req, res) => {
//   res.render('layout', {
//     title: 'Home Page',
//     body: '<%- include("index", { message: "Welcome to the home page!", showSpecialMessage: true }) %>'
//   });
// });

// app.get('/about', (req, res) => {
//   res.render('layout', {
//     title: 'About Page',
//     body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, aliquam.'
//   });
// });


// app.listen(4000, () => {
//   console.log('Server is running on port 4000');
// });


const express= require('express');
const app = express();

const port= 4000;
app.use(express.json());
const userRoute= require("./routs/app");

app.use("/api/v1",userRoute);

app.listen(port, ()=>{

  console.log("app started at port", port)
});









