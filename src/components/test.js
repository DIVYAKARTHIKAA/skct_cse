import '../App.css';

const Mydata=(props)=>{
  return(
    <h1>I'm{props.name}</h1>
  )
}

function User() {
  return (
    <>
      <Mydata name="Mohan"/>
      <Mydata name="Manoj"/>
    </>
  );
}

export default User;
