import React from 'react';
import ReactDOM from 'react-dom';


const Hello = () =>{
  return (
    <div>
      <h1>Check out my sweet stateless component</h1>
    </div>
  )
}

ReactDOM.render(
  <Hello />,
  document.getElementById('app')
)
