export class ReduxState {
  constructor(props) {
    this.props = props;
    this.handlers = {};
    this.default = (event) => this;
  }
  
  register(eventName, callback) {
    this.handlers[eventName] = callback;
  }
  
  registerDefault(callback) {
    this.default = callback;
  }
  
  handle(event) {
    const callback = handler[event.type];
    if( callback ) 
      return callback(event);
    
    return this.default(event);
  }
}
