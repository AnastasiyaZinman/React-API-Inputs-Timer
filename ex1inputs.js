class InputTest extends React.Component {
  constructor() {
    super()
    this.state = {
    testText: "",
      name:'',
      age:0,
      hasUnderstood: false
    }
  }
  updateText = (e) =>{
    this.setState({
      testText: e.target.value
    })
  }
  changeText = () => { //don't forget arrow syntax for correct `this` binding
    this.setState({
      testText: "Something else"
    })
  }
  updateText = (e) =>{
     this.setState({
      name: e.target.value
    })
  }
   updateAge = (e) =>{
     this.setState({
       age: e.target.value
    })
  }
   check = () => {
     if(this.state.age > 16)
     {
       alert('Welcome to the club,' + this.state.name)
     }
      else alert ('You are too young to enter')
   }
  alertFunc = () =>{
    alert(this.state.testText);
  }
  updateCheckbox = (event) => {
    this.setState({
      hasUnderstood: event.target.checked
    })
  }
  render() {
    return (
      <div>
      <div>
        <input  onChange={this.updateText} value= {this.state.testText} type="text" />
        <button onClick={this.alertFunc} >Alert</button>
        <button onClick={this.changeText}>Change</button>
       </div>
       <div>
        <br />
        <input  onChange={this.updateText} value={this.state.name} type="text" />
        <input  onChange={this.updateAge} value={this.state.age} type="text" />
          <button onClick={this.check}>Change</button>
      </div>
     </div>
    )
  }
}

ReactDOM.render(<InputTest />, document.getElementById("container"))