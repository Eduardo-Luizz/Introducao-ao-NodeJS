const {EventEmitter} = require('events')
const events = new EventEmitter() 

// Ouvindo eventos, tem que ser antes do disparo
events.on('sayMyName', (message) => {
  console.log('Eu ouvi você:' + message)
})

// Ouvindo uma única vez
events.once('sayMyName', (message) => {
  console.log('Dentro da function once => Eu ouvi você:' + message)
})


// Disparando eventos
events.emit('sayMyName', "Eduardo")
events.emit('sayMyName', "Eduardo")
events.emit('sayMyName', "Eduardo")