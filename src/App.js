import image from './resources/1.jpg';
import './App.css';
import { Component } from 'react';

export default class App extends Component {
  state = {
    count: 0,
    text: "",
    password :["7849","3162","9157","1451","8712","2215","0422"]
  }
  render(){
    let  showBelowImage  = null;
    if(this.state.count < this.state.password.length){
      showBelowImage = <input
        type="password"
        value={this.state.text}
        onChange={e => this.handleChange(this.state.count, e)}
        className="password"
        placeholder="Password"
      />
    } else {
      showBelowImage  = <div className="congrats"><h2>Your gift is here!</h2></div>
    }
    return (
      <div className="App">
        <h1>Treasure Hunt</h1>
        <img src={require("./resources/"+this.state.count+".jpg")} className="image" alt="logo" /><br/>
        {showBelowImage}
      </div>
    );
  }

  handleChange(count, e){
    if(e.target.value == this.state.password[this.state.count]){
      this.setState({
        count : count+1,
        text: ""
      })
      e.target.blur();
    }
    else {
      this.setState({
        text: e.target.value
      })
    }
  }

}
