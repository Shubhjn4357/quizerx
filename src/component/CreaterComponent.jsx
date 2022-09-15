import {useState} from "react";
import { ref, set } from "firebase/database";
import {database} from "../firebase.config"
import Mcq from "./Mcq"
import TextBase from "./TextBase"
import {Link} from "react-router-dom";
const CreaterComponent=()=>{
 
  const [State,setState]=useState({
    data:[
    { type:"mcq"
  }]})
  const [Pid,setId] =useState("")
 const HandleState=(e,index)=>{
    setState({...State,
    data:State.data.map((item,id)=>{
      if(id === index){
        return {
          ...item,
          [e.target.name]:e.target.value
        }
      }
      return item
    })})
  } 
 const HandleQuestion=(e,index)=>{
    setState({...State,
    data:State.data.map((item,id)=>{
     if(id === index){
      return {...item,question:e}
     }
     return item
      })
    })
 }
 const AddQuestion=()=>{
   setState({...State,
    data:[...State.data,
    { type:"mcq"}
    ]})
 }
 const Submit=(e)=>{
   e.preventDefault();
   e.stopPropagation()
  const userId=new Date().getUTCMilliseconds();
  try{
     set(ref(database, 'users/' + userId),State);
     setId(userId)
  }
  catch(error){
    console.log(error)
  }
 }
 console.log(State)
  return(<>
  <form onSubmit={Submit}>
  <span className="btn btn-warning"><Link className={`${Pid?"d-block":"d-none"} text-decoration-none`} to={`/form/student/${Pid}`}>Preview</Link></span>
    <div className="flex items-center flex-wrap justify-center">
        {State.data.map((item,index)=>{
         return( <div key={index} className="mb-6 mt-3 my-2 p-2 card">
          <select className="form-select" value={item.type} name="type" onChange={(e)=>HandleState(e,index)} aria-label="Select Type">
            <option disabled >Open this select menu</option>
            <option value="mcq">MCQ</option>
            <option value="textbase">TextBase</option>
          </select>
          {item.type==="mcq"?<Mcq question={(e)=>HandleQuestion(e,index)}/>:<TextBase question={(e)=>HandleQuestion(e,index)}/>}
          </div>)})}
    </div>
 
  <button className="btn btn-info mx-2 " onClick={AddQuestion}>Add New Question</button>
  <button type="submit" className="btn btn-dark mx-2" >Submit Form</button>
  </form>
  </>)
}
export default CreaterComponent