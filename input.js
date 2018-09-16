class InputTest extends React.Component {
    constructor() {
      super()
      this.state = {
      testText: "",
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
          <input  onChange={this.updateText} value= {this.state.testText} type="text" />
          <button onClick={this.alertFunc} >Alert</button>
          <button onClick={this.changeText}>Change</button>
          <input type="checkbox" checked={this.state.hasUnderstood} onChange={this.updateCheckbox}/>
        </div>
      )
    }
  }
  
  ReactDOM.render(<InputTest />, document.getElementById("container"))
  