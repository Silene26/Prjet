import {Fragment} from "react";

const title="Bonjour les <strong>gens</strong>"
const style={color: 'red', backgroundColor:"yellowgreen"}
const mouais="Coucou tous le monde"
const showTitle=false
const todos=[
  'Présenter react','Presénter x',"Présenter y"
]

function Apps() {
  const handleClick=(e)=>{
    //Empêche le comportement par défaut lié à l'événement e
    e.preventDefault()
    //Empêche l'événement de remonter dans la hiérarchie des élements
    e.stopPropagation()
    alert("J'ai cliqué sur le titre")
  }

 return <>
 
  <h1 onClick={handleClick}id="title" className="title"style={style}>{title}</h1>
  {showTitle && <h1 onClick={()=>{alert("bonjour les gens")}}>{mouais}</h1>}
  {showTitle ? <h1>Pourquoi</h1> : <p>Ben non</p>}
  <input type="text"/>
  <p>salut</p>
   {/*Balise personnalisée*/}
  <Title color="blue"><strong>Composant</strong></Title>
  <ul>
      {todos.map(todo => (<li key={todo}>{todo}</li>))}
    
  </ul>
  <Autre id="hy" className="ppp"></Autre>
  </>
}

//Fonction qui recoit des propriéte(arguments) sous forme d'objet
/*Cela permet d'utiliser les balises html dans title*/
//Hidden prend true si la valeur existe sinon undefined
function Title({color,children,hidden}){
  if(hidden){
    return null
  }
  console.log(hidden)

  //Ajouter des attributs id et class à l'élément
  const props={
  id :"monique",
  className: "maclass",
  }
  return <h3 style={{color : color}} {...props}>{children}</h3>
}

function Autre({...props}){
  return <h1 {...props}>Salut</h1>
}

export default App