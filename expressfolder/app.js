// const express = require('express');
// const path = require('path');
// const app = express();

// // Serve static files from the "public" directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Define a route for the home page
// app.get('/', (req, res) => {
//   res.send(`
//     <!DOCTYPE html>
//     <html>
//     <head>
//       <title>Home Page</title>
//       <link rel="stylesheet" type="text/css" href="/css/styles.css">
//     </head>
//     <body>
//       <h1>Welcome to the Home Page</h1>
//       <img src="/logo/logo.jpg" alt="Logo">
//       <script src="/js/script.js"></script>
//     </body>
//     </html>
//   `);
// });

// // Start the server
// app.listen(4000, () => {
//   console.log('Server is running on port 4000');
// });





// const express = require('express');
// const app = express();

// app.use(express.static('public'));
  

// app.use(express.json());


// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });


// app.listen(4000, () => {
//   console.log('Server is running on port 4000');
// });

// var fs = require('fs');

// var readStream = fs.createReadStream('./files/temp.txt');

// /*Write to the console when the file is opened:*/
// readStream.on('open', ()=> {
//       console.log('The file is open');
// });

//Broadcasting 
// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// // Serve static files from the "public" directory
// app.use(express.static('public'));

// // Handle connection event
// io.on('connection', (socket) => {
//   console.log('A user connected');

//   // Broadcast a message to all connected clients
//   socket.broadcast.emit('message', 'A new user has joined the chat');

//   // Handle custom event from the client
//   socket.on('chatMessage', (msg) => {
//     // Broadcast the message to all clients, including the sender
//     io.emit('chatMessage', msg);
//   });

//   // Handle disconnection event
//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//     socket.broadcast.emit('message', 'A user has left the chat');
//   });
// });

// // Start the server
// const PORT = process.env.PORT || 4000;
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// // Serve static files from the "public" directory
// app.use(express.static('public'));

// // Default namespace
// io.on('connection', (socket) => {
//   console.log('A user connected to the main namespace');

//   socket.on('disconnect', () => {
//     console.log('A user disconnected from the main namespace');
//   });

//   socket.on('message', (msg) => {
//     io.emit('message', `Main namespace: ${msg}`);
//   });
// });

// Custom namespace /chat
// const chat = io.of('/chat');
// chat.on('connection', (socket) => {
//   console.log('A user connected to the /chat namespace');

//   socket.on('disconnect', () => {
//     console.log('A user disconnected from the /chat namespace');
//   });

//   socket.on('message', (msg) => {
//     chat.emit('message', `Chat namespace: ${msg}`);
//   });
// });

// const PORT = 4000;
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// const express = require('express');
// const app = express();

// app.use(express.json());

// app.post("/user", (req,res)=>{
//     try{
//         console.log(req.body)
//     }
//     catch(err){
//         return res.status.json({
//             success:false,
//             error:err.message
//         })
//     }
// })

// app.listen(4000,()=>{
//     console.log("app started at",4000)
// })

// const winston = require('winston');

// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.combine(
//     winston.format.timestamp(),
//     winston.format.printf(({ timestamp, level, message }) => {
//       return `${timestamp} [${level}]: ${message}`;
//     })
//   ),
//   transports: [
//     new winston.transports.Console(),
//     new winston.transports.File({ filename: 'combined.log' })
//   ]
// });

// logger.info('This is an info message');
// logger.error('This is an error message');


// server.js
// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');

// // Create an Express application
// const app = express();

// // Create an HTTP server and bind it to the Express app
// const server = http.createServer(app);

// // Bind Socket.IO to the HTTP server
// const io = socketIo(server);

// // Serve static files from the "public" directory
// app.use(express.static('public'));

// // Handle connection events
// io.on('connection', (socket) => {
//   console.log('A user connected');

//   // Handle custom events
//   socket.on('chatMessage', (msg) => {
//     console.log('Message from client:', msg);
//     io.emit('chatMessage', msg); // Broadcast message to all clients
//   });

//   // Handle disconnection
//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   });
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// server.js
// server.js
// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');

// // Create an Express application
// const app = express();

// // Serve static files from the "public" directory
// app.use(express.static('public'));

// // Create an HTTP server and bind it to the Express app
// const server = http.createServer(app);

// // Bind Socket.IO to the HTTP server
// const io = socketIo(server);

// // Handle connection events
// io.on('connection', (socket) => {
//   console.log('A user connected');

//   // Send a "hello" message to the client
//   socket.emit('message', 'Hello world!');

//   // Handle incoming "message" events from the client
//   socket.on('message', (msg) => {
//     console.log('Message from client:', msg);
//   });

//   // Handle disconnection
//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   });
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });




//Mongo Db connection

// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const port = 4000;

// app.listen(port, ()=>{
//   console.log("app is listening on port", port);
// })

// const databaseUrl = 'mongodb://127.0.0.1:27017/myData';
// mongoose.connect(databaseUrl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(()=> {console.log("database connect successfully")})
// .catch((err)=>{
//   console.log("database connection faield");
//   console.error(err);
//   process.exit(1);
// })
// app.get("/", (req,res)=>{
//   return res.status(200).json({
//       success: true,
//       message:" hello dashboard"
//   })
// })

//My sql
// const mysql = require('mysql2');

// // Connection configuration for a local MySQL server
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'mydatabase'
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
//   console.log('connected as id ' + connection.threadId);
// });

// module.exports = connection;

// const { MongoClient } = require('mongodb');

// const uri = 'mongodb://127.0.0.1:27017/myData'; 
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// async function run() {
//     try {
//         await client.connect();
//         console.log('Connected to MongoDB');
        
//         const database = client.db('myData'); 
//         const collection = database.collection('mycollection'); 

//         await collection.insertMany([
//             { name: 'Rahul', age: 21, email: 'rahul@example.com' },
//             { name: 'oggy', age: 24, email: 'oggy@example.com' },
//             { name: 'tom', age: 38, email: 'tom@example.com' },
//             { name: 'warner', age: 30, email: 'warner@example.com' },
//             { name: 'Noren', age: 25, email: 'noren@example.com' }
//         ]);

//         // Create indexes
//         await collection.createIndex({ name: 1 });
//         await collection.createIndex({ name: 1, age: -1 });
//         await collection.createIndex({ email: 1 }, { unique: true });
//         console.log('Indexes created');

//         // Use indexes in queries
//         const result = await collection.find({ name: 'Rahul' }).toArray();
//         console.log('Query result:', result);

//         // List indexes
//         const indexes = await collection.listIndexes().toArray();
//         console.log('Indexes on the collection:', indexes);

//         // Drop an index
//         await collection.dropIndex('name_1');
//         console.log('Index on the name field dropped');

//         // Drop all indexes
//         await collection.dropIndexes();
//         console.log('All indexes dropped');
        
//     } finally {
//         await client.close();
//     }
// }

// run().catch(console.dir);

const mysql = require('mysql');
ng
const pool = mysql.createPool({
    connectionLimit: 10, // Adjust as needed
    host: 'hostname',
    user: 'shuva',
    password: '....',
    database: 'mydata'
});

// Use the pool to execute queries
pool.query('SELECT * FROM your_table', (error, results, fields) => {
    if (error) {
        console.error('Error executing query:', error);
        return;
    }
    console.log('Query results:', results);
});






 