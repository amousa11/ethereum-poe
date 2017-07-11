import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import POE from './iota.lib.js/examples/proof-of-existence.js';


class App extends Component{
   constructor(props) {
    super(props);
    this.state = {page: 'Selector'};
    this.switchPage = this.switchPage.bind(this);
  }

  switchPage(page) {
    this.setState({page: page});
  }


  render() {
    switch (this.state.page){
      case 'Selector': return <Selector switchPage={this.switchPage}/>
      default: return null;  
    }
  }
}
class Selector extends Component {

 constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Hash of value: ' + this.state.value);
    event.preventDefault();
    POE.getHash(this.state.value, this.onSubmitSuccess.bind(this), this.onSubmitFailure.bind(this));
  }

  onSubmitSuccess(success) {
    console.log(success);
  }

  onSubmitFailure(failure) {
    alert(failure);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Hash:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
