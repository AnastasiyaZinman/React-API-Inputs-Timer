class InputTest extends React.Component {
  constructor() {
    super()
    this.state = {
    testText: "",
      name:'',
      age:0,
      hasUnderstood: false,
      selectedAuto: '',
      nameNew:''
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
      testText: e.target.value
    })
  }
   updateAge = (e) =>{
     this.setState({
       age: e.target.value
    })
  }
  
  alertFunc = () =>{
    alert(this.state.testText);
  }
  updateCheckbox = (event) => {
    this.setState({
      hasUnderstood: event.target.checked
    })
  }
  handleInputChange =(event)=>{
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
confirm =(e)=>{
  alert(this.state.nameNew + " selected " + this.state.selectedAuto);
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
        <input  name="nameNew" onChange={this.handleInputChange} value={this.state.nameNew} type="text" />
        <select name="selectedAuto" onChange={this.handleInputChange} >
       <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        </select>
          <button onClick={this.confirm}>confirm</button>
      </div>
     </div>
    )
  }
}

ReactDOM.render(<InputTest />, document.getElementById("container"))