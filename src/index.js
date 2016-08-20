
const handlers = {};

export default class ReduxState {
  constructor(values) {
    Object.assign(this,values);
  }
  
  register(type, callback) {
    handlers[type] = callback;
  }
  
  handle(event) {
    const callback = handlers[event.type];
    
    if(callback)
      return callback(this, event);
    
    return this;
  }
}