// document.addEventListener('DOMContentLoaded', () => {
//     const socket = io();
  
//     const form = document.getElementById('form');
//     const input = document.getElementById('input');
//     const messages = document.getElementById('messages');
  
//     form.addEventListener('submit', (event) => {
//       event.preventDefault();
//       if (input.value) {
//         socket.emit('chatMessage', input.value);
//         input.value = '';
//       }
//     });
  
//     socket.on('chatMessage', (msg) => {
//       const item = document.createElement('li');
//       item.textContent = msg;
//       messages.appendChild(item);
//       window.scrollTo(0, document.body.scrollHeight);
//     });
//   });
  

document.addEventListener('DOMContentLoaded', () => {
    const socket = io();
  
    const form = document.getElementById('form');
    const input = document.getElementById('input');
    const messages = document.getElementById('messages');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (input.value) {
        // Send the message to the server
        socket.emit('message', input.value);
        input.value = '';
      }
    });
  
    // Listen for messages from the server
    socket.on('message', (msg) => {
     
        const item = document.createElement('li');
        item.textContent = msg;
        messages.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);
      });
    });
      
  