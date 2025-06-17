
import {Fragment,useEffect,useState} from "react";


function App(){

  const [yes,setyes]=useState(true)
  return<>
  
    <Checkbox checked={yes} onChange={setyes}/>
    {yes && <EditTitle/>}
  <div style={{height: '300vh'}}></div>

  
  </>
}

function Checkbox({checked ,onChange}){
  return <div>
  <label>
    <input type="checkbox" onChange={(e)=>onChange(e.target.checked)} checked={checked}/>
    Afficher le champ titre
  </label>
  </div>
}

function Input({placeholder, onChange}){
  return <form>
    <input type="text" placeholder={placeholder} onChange={(e)=>onChange(e.target.value)}/>
  </form>

}

function EditTitle(){
  const[title,setTitle]=useState('')
  const [firstname, setFirstname]=useState('')
  const[y,setY]=useState(0)

  /* Fonctionne de la même manière les lignes suivantes avec useEffect mais avec useEffect y aura pas d'execution si on modifie le prénom 
  document.title=title
*/
    //Revenir avec le titre original lorque la case n'est plus cochée
  useEffect(()=>{
    const originalTitle=document.title
    return ()=>{
      document.title=originalTitle
    }
  },[]);  

  
  useEffect(()=>{
    document.title=title
  },[title]);



  //Lorsqu'on branche des évènements avec useEffect faut penser à  nettoyer les effects de bord
  /*le Hook est appelé même lorqu'EdiTitle n'existe plus du a
  useEffect(()=>{
    window.addEventListener('scroll',(e)=>setY(window.scrollY))
  },[]);*/

  //Solution
  useEffect(()=>{
    const handler=(e)=>{
      console.log('scroll')
      setY(window.scrollY)
    }
    window.addEventListener('scroll',handler)
    return ()=>
      window.removeEventListener('scroll',handler)
  })
  return <div>
    <div>Scroll : {y} </div>
    <Input placeholder="Modifier le titre" value={title} onChange={setTitle}/>
    <Input placeholder="Prénom" value={firstname} onChange={setFirstname}/>
  </div>

}
export default App