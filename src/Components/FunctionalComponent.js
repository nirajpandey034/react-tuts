import React, {useState, useEffect} from "react";

function FunctionalComponent() {
  const [name, setName] = useState('');
  // const [dave, setDave] = useState('');

  // useEffect(()=>{    //side-effect
  //   setName('manish');
  // },[]);

  const handleNameChange= (e)=>{
      setName(e.target.value);
  }
  return(
    <div>
      <input type="text" placeholder="enter name" onChange={(e)=>handleNameChange(e)}></input>
      {
        name !== '' && <button>Login</button>
      }
    </div>
  );
}

export default FunctionalComponent;
