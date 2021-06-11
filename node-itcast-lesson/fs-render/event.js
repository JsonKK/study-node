const EventEmitter = require('events').EventEmitter;
const event = new EventEmitter();

class Event {
  constructor(){
    const eventName = this.eventName = 'some_event';
    this.count = 0;
    event.on(eventName,()=>{
      this.count++;
      console.log(`${eventName} is occured;${this.count}`);
    })
  }

  emitEvent(){
    setTimeout(()=>{
      event.emit(this.eventName);
    })
  }
}

module.exports = Event;