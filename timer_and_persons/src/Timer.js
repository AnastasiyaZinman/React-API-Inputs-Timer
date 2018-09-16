
import React, { Component } from 'react';
class Timer extends Component {

  constructor() {
    super()
    this.state = {
      time: new Date(),
    }
  }
  //This method gets triggered just before a component gets un-mounted, i.e removed from the DOM.
componentWillUnmount(){
    clearInterval(this.timer)
}
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: new Date() })
      console.log("Updated time")
    }, 1000)
  }

  render() {
    return <div> {this.state.time.toLocaleTimeString()}</div >
  }
}
export default Timer;