type sticktype = {
  children : string
}

const stick = (prop : sticktype) => {
  return (
    <div>{prop.children}</div>
  )
} 

export default stick