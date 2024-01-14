import React from 'react'


type Buttontype = {
  handleClick: (event:React.MouseEvent<HTMLButtonElement> , id:number) => void
}

const Button = (props : Buttontype) => {
  return (
    <button onClick={(event) => props.handleClick(event,1)}>Click</button>
  )
}

export default Button