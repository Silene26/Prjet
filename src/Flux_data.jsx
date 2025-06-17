
import {Fragment,useState} from "react";


function Flux_data(){
  const [isTermAccepted, setIsTermAccepted]=useState(false)
  return <form>
    <CGUChecked checked={isTermAccepted} onCheck={setIsTermAccepted}/>
    <button disabled={!isTermAccepted}>Envoyer le formulaire</button>
  </form>

}

function CGUChecked({checked, onCheck}){
  return <div>
    <label>
      <input type="checkbox" onChange={(e)=>onCheck(e.target.checked)} checked={checked}/>
      Accepter les conditions d'utilisations
    </label>
  </div>

}
  


export default App