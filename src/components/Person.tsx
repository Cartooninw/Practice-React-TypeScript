type persontype = {
  name : {
    first : string
    last : string
  }
}

const Person = (props : persontype) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  )
}

export default Person

