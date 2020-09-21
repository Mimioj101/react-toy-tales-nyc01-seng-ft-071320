import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  let toys = props.toyData.map(toy => <ToyCard key={toy.id} toy={toy} deleteHandler={props.deleteHandler}/>)
  console.log(props)
  return(
    <div id="toy-collection">
      {toys}
    </div>
  );
}

export default ToyContainer;
