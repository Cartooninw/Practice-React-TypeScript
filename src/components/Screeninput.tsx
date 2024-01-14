import React, { useState } from 'react'





const Screeninput = ( ) => {
  const [isshowing,setshowing] = useState('');
  const getShow = (event:React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setshowing(value);
  }
  
  return (
    <div>
      Your input is <>{isshowing}</>
      <div><input onChange={getShow}></input></div>
    </div>
  )
}

export default Screeninput