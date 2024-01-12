import React from 'react'
type StickBoxType = {
  children:React.ReactNode
}

const StickBox = (prop:StickBoxType) => {
  return (
    <div>{prop.children}</div>
  )
}

export default StickBox