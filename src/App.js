import React from 'react';
import Message from "./components/Message";
import image from "./asserts/image.jpg";






function App() {
  return (
    <div className="container mt-3">
     <div className= "row">
     <div className = "col-md-5">
    <Message/>
     </div>
     <div className ="col-md-7 my-auto">
     <img className='img-fluid w-60' src={image} alt="avatar-img"></img>
     </div>
     </div> 
     </div>
  );
}

export default App;
