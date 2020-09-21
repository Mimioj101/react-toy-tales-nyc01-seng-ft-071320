import React, { Component } from 'react';
import toyData from '../data';

class ToyCard extends Component {

  // state = {
  //   newArray: []
  // }
  
  deleteHelper = () => {
    this.props.deleteHandler(this.props.toy)
    // console.log(this.props.toy)
  }

  render() {
    // console.log("props", this.props)
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button className="like-btn">Like {'<3'}</button>
        <button className="del-btn" onClick={this.deleteHelper}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
