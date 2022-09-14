import {useState,useEffect} from "react";
import { ref, set ,onValue} from "firebase/database";
import {database} from "../firebase.config"
import Mcq from "./Mcq"
import TextBase from "./TextBase"
import {useNavigate} from "react-router-dom";
const CreaterComponent=()=>{
  const navigate=useNavigate()
  const [State,setState]=useState({
    data:[
    { type:"mcq"
  }]})
 const HandleState=(e,index)=>{
    setState({...State,
    data:State.data.map((item,id)=>{
      if(id === index){
        return {
          ...item,
          [e.target.name]:e.target.value
        }
      }
     return {...item}
    })})
  } 
 const HandleQuestion=(e)=>{
    setState({...State,
    data:[...State.data,
    State.data.map((item)=>{
      return item={...item,question:e}
      })]
    })
 }
 useEffect(()=>{
   const RetrieveData=()=>{
     const starCountRef = ref(database, 'users/');
        onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();
          //setState(data);
          console.log(data)
        });
   }
 return ()=>{
  RetrieveData();
 }
 },[])
 const Submit=()=>{
  const userId=new Date().getUTCMilliseconds();
  try{
     set(ref(database, 'users/' + userId),State);
     navigate(`/preview/${userId}`)
  }
  catch(error){
    console.log(error)
  }
 }
  return(<>
  <form>
    <div className="flex items-center flex-wrap justify-center">
        {State.data.map((item,index)=>{
         return( <div key={index} className="mb-6 mt-3 my-2 card">
          <select className="form-select" value={item.type} name="type" onChange={(e)=>HandleState(e,index)} aria-label="Select Type">
            <option disabled >Open this select menu</option>
            <option value="mcq">MCQ</option>
            <option value="textbase">TextBase</option>
          </select>
          {item.type==="mcq"?<Mcq question={(e)=>HandleQuestion(e)}/>:<TextBase question={(e)=>HandleQuestion(e)}/>}
          </div>)})}
    </div>
 
  <button type="submit" className="btn btn-dark" onClick={Submit}>Submit Form</button>
  </form>
  </>)
}
export default CreaterComponent