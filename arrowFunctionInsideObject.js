let anotherObject = {
  name: "John Doe",
  
  handleSomething: function (message, handler) {
    handler(message) 
  },
  
  // without arrow function 
  //receiveSomething: function() {
  //  let that = this; // this is really confusing ...
    
  //  this.handleSomething("Hello ", function (message) {
  //    that.name; // this way we can get name ...
      
  //    console.log(message + that.name);
  //  })
    
  //}
  // with arrow function ... 
  receiveSomething: function() {
    this.handleSomething("Hello ", message => console.log(message + this.name))
    
  }
}

anotherObject.receive();
