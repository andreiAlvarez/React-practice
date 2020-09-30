//React: Write a Simple Counter

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // change code below this line
this.increment=this.increment.bind(this);
this.decrement=this.decrement.bind(this);
this.reset=this.reset.bind(this);
    // change code above this line
  }
  // change code below this line
increment(){
  this.setState(state=>({
    count: state.count + 1
  }))
};
decrement(){
  this.setState(state=>({
    count: state.count - 1
  }))
};
reset(){
  this.setState(state=>({
    count: 0
  }))
};

  // change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
// React: Create a Controlled Input

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // change code below this line
this.handleChange=this.handleChange.bind(this);
    // change code above this line
  }
  // change code below this line
handleChange(event){
  this.setState({
    input: event.target.value
})
}
  // change code above this line
  render() {
    return (
      <div>
        { /* change code below this line */}
<input value = {this.state.input} onChange = {this.handleChange.bind(this)}/>
        { /* change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
