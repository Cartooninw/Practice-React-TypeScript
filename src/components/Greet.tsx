
// type GreetType = {
//   name : {
//     firstname : string;
//     lastname : string;
//   };
// };

// const Greet = (probs:GreetType) => {
//   return (
//     <div>Hello , {probs.name.firstname} {probs.name.lastname} Welcome to Manganga</div>
//   );
// };

// export default Greet;

type GreetType = { 
  name : string
  Option?: string
}
const Greet = (probs : GreetType) => {
  return (
    <div>
      <h2>Welcome {probs.name} You have 10 unread messages</h2>
    </div>
  )
}
export default Greet;