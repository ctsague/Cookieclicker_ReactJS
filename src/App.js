import React, { Component } from 'react';
import cookie from './Cookies.png';

class App extends Component {
  constructor(){
      super();
      this.state = {
      counter : 0,
      tab : ["oups","Serieux","va faire un tour!"],
      }
  }
  click(){
      this.setState({
        counter : this.state.counter + 1,
  });    
  this.random();
  }
  random(){
    let choice = this.state.tab;
    let len = choice.length;
    if(this.state.counter % 10 === 0){
      let message=(choice[Math.floor(Math.random()*len)])
      alert(message);
    }
  }
  render() {
    return (
      <div>
        <img onClick={this.click.bind(this)} src={cookie} alt="cookie"/>
        <span value="">{this.state.counter}</span>
      </div>
    )
  }
};

export default App;
