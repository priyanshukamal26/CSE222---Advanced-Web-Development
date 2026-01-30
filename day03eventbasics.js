// import EventListener (class) from 'events' (module)
import EventListener from 'events';
// // change default max listeners for all instances
// EventListener.defaultMaxListeners = 20; 

// create an instance of EventListener class - emitter object
const myEmitter = new EventListener();



// // Register an event listener for 'greet' event
// myEmitter.on('greet', (name) => {
//   console.log('Hello, ', name);
//   console.log(`Hello, ${name}`);
// });
// myEmitter.emit('greet', 'Programmer');

// myEmitter.once('init', () => {
//   console.log('Runs only once');
// });

// myEmitter.emit('init');
// // won't run again
// myEmitter.emit('init'); 



// function onData(data) { // data = event
//     console.log('Data received:', data);
// }

// // Normal JS run
// onData("Ram");

// // Attach the event listener to 'data' event
// myEmitter.on('data', onData);

// // Emit 'data' event -> listener runs
// myEmitter.emit('data', 'File 1');

// // Remove the event listener
// myEmitter.removeListener('data', onData);

// // Emit 'data' event again -> listener won't run
// myEmitter.emit('data', 'File 2');


// // TRY IT YOURSELF
// myEmitter.on(userlogin, (username) => {
//     console.log(`${username} logged in`);
// });

// myEmitter.emit(userlogin, 'admin');

// //callback function
// function userlogin(username) {
//     console.log(`${username} logged in`);
// }



// Add more than 10 event listeners to the same event
// Default capacity/limit is 10 - use setMaxListeners() to increase the limit

// myEmitter.setMaxListeners(15); // increase limit to 15

// for(let i=1; i<=10; i++) {
//     myEmitter.on('message', () => {
//         console.log(`Listener ${i} triggered`);
//     });
// }

// // Emit 'message' event
// myEmitter.emit('message');

// // Check the current max listeners limit
// console.log(myEmitter.getMaxListeners())
// // Check the number of listeners for 'message' event
// console.log(myEmitter.listenerCount('message'));

// // To see event names
console.log(myEmitter.eventNames());


// REPL - Read, Evaluate, Print, Loop
// Used to run Node code in local terminal 
// Go to CMD/Terminal and type 'node' to enter REPL mode
// To exit REPL mode, type .exit and press Enter or Ctrl + C twice or Ctrl + D

// In REPL mode, you can type JavaScript code and it will be executed immediately


