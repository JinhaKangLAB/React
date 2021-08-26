/*eslint-disable*/

import React, { useState } from 'react';
import './App.css';

function App() {
  
  let [title,changeTitle] = useState(['Recommendations','Unrecommended','Newport']);
  let [like,changeLike]=useState(0);
  //let posts = 'Top Five Scrumptious Resturants in PVD';

  function sorting(){
    var newArray = [...title];
    newArray = ['Newport','Recommendations','Unrecommended'];
    changeTitle(newArray);
  }
  
    return (
    <div className="App">
      <div className="black-nav">
        <div>PVD Blog</div>
        </div>

        <button onClick={sorting}>Sort by</button>
        <div className="list">
          <h3>{ title[0] } <span onClick={ ()=>{changeLike(like+1)} }>👍</span>{like}</h3>
          <p>issued 08/22/2021</p>
          <hr/>
        </div>
        
        <div className="list">
          <h3>{ title[1] }</h3>
          <p>issued 08/23/2021</p>
          <hr/>
        </div>

        <div className="list">
          <h3>{ title[2] }</h3>
          <p>issued 08/24/2021</p>
          <hr/>
        </div>
         <Modal></Modal>
        {/* <div className="modal">
          <h2>Title</h2>
          <p>2021</p>
          <p>blah blah</p>
        </div> */}
    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
    <h2>Title</h2>
    <p>2021</p> 
    <p>blah blah</p>
  </div>
  )
}

export default App;
