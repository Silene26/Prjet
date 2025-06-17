import {Fragment, useState} from "react";



function Hook() {

  const [count,setCount]=useState(0)

  const [person,setPerson]=useState({
    firstName:"John",
    lastName:"Doe",
    age:18,
  })

  const increment =()=>{
    //Cela n'incrémentera qu'une seule fois et non 3 fois
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
  }

  const increment_3=()=>{
    setCount((c)=>c+1)
    setCount((c)=>c+1)
    setCount((c)=>c+1)

  }

  const increment_age=()=>{
    setPerson({...person, age : person.age+1})
  }
  /* Faux 
  if(person.age<19){
    const[count,setCount]=useState()
  }
    */
  return <>
  <p>Compteur : {count}</p>
  <button onClick={increment}>Incrémenter</button>
  <p>Age de {person.firstName} : {person.age} </p>
  <button onClick={increment_age}>Gagner un âge</button>
  </>

}

export default App