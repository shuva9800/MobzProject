
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






const express = require('express');
const app = express();
const port = 4000;

// body parsing
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.post('/api/cars', (request,response) => {
  const {name, brand} = request.body;
  console.log(name);
  console.log(brand);
  response.send("Car Submitted Successfully.")
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});