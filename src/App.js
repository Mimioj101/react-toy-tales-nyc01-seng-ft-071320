import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    display: false,
    // empty array to manipulate
    toyArray: []
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }


  componentDidMount() {
    // initial fetch to render data
    fetch("http://localhost:3000/toys")
    .then(resp => resp.json())
    .then(data => this.setState({toyArray: data}))
  }

  submitHelper = (obj) => {
    // pessimistically render. Add to API here:
    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(obj)})
    .then(resp => resp.json())
    // pessimistically render. Set State here:
    .then(data => this.setState({toyArray: [...this.state.toyArray, data]}))
  }

  deleteToyHandler = (toyObj) => {
    console.log(toyObj)
    fetch("http://localhost:3000/toys/" + toyObj.id, {
      method: "DELETE"})
      .then(resp => resp.json())
      .then(data => {
        let newArray = this.state.toyArray
        newArray.splice(newArray.indexOf(toyObj), 1)
        this.setState({toyArray: newArray})
        } 
      )
  }

  render(){
    // console.log(this.state)
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm submitHandler={this.submitHelper} />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toyData={this.state.toyArray} deleteHandler={this.deleteToyHandler}/>
      </>
    );
  }

}

export default App;
