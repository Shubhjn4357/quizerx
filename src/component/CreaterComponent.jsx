import {useState} from "react";
import { ref, set } from "firebase/database";
import {database} from "../firebase.config"
import Mcq from "./Mcq"
import TextBase from "./TextBase"
import {Link} from "react-router-dom";
const CreaterComponent=()=>{

  const [State,setState]=useState({
    title:"",
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
   e.stopPropagation();
  const userId=new Date().getUTCMilliseconds();
  try{
     set(ref(database, 'users/' + userId),State);
     setId(userId)
  }
  catch(error){
    console.log(error)
  }
 }
 const HandleTitle=(e)=>{
   setState({...State,
   [e.target.name]:e.target.value})
 }
  return(<>
  <form onSubmit={Submit}>
  <span className={`${Pid?"d-block":"d-none"} btn btn-warning`}><Link className="text-decoration-none text-info" to={`/form/student/${Pid}`}>Preview</Link></span>
    <div className="flex items-center flex-wrap justify-center">
    <div className="card my-2 p-2">
      <span className="fs-5">Title</span>
      <div className="my-1">
        <input className="form-control" type="text" name="title" value={State.title} onChange={HandleTitle} placeholder="Title For Form" required />
      </div>
    </div>
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