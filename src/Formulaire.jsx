
import {Fragment,useState} from "react";

function Formulaire(){

  const [firstName,setFirstname]=useState("John Doe")

  const handleChange =(e)=>{
    setFirstname(e.target.value)

  }
  const reset =()=>{
    setFirstname("")
  }

  const handleSubmit=(e)=>{
    //Empêche le rechargement de la page
    e.preventDefault()
    console.log(new FormData(e.target))
  }
  const [checked, setChecked]=useState(true)
  const toggleCheck=()=>{
    setChecked(!checked)
  }


  return <>
  <form onSubmit={handleSubmit}>
    {/*Champ contrôlé Problème : trop de cote à exécuter*
    <input type="text" name="firstName" value={firstName} onChange={handleChange}/>
    <button onClick={reset} type="button">Reset</button>
    */}
    {/*Champ non contrôlé  Dans button ne pas mettre type=button pour qu'il puisse envoyer le formulaire                 */     }
    <input type="text" name="firstName" defaultValue="a"/>
    <button >Envoyer</button>
    <textarea value={firstName} onChange={handleChange}/>
    <input type="checkbox" checked={checked} onChange={toggleCheck}/>
    {checked && <p>Bien envoyé</p>}
    {<p hidden={!checked}>Danser</p>}
  </form>
  </>
}

export default App