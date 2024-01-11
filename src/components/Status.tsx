type StatusType = {
  status : 'loading' | 'success' | 'error' 
}

const Status = (props:StatusType) => {
  let message ;
  if (props.status === 'loading') {
    message = 'loading. . .';
   } else if (props.status === "success") {
    message = "successful!";
  } else if (props.status === 'error') {
    message = 'Something went wrong' ;
  }   
  return (
    <div>
      <h2>Your status is {message}</h2>
    </div>
  )

}


export default Status