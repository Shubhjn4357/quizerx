import { ref,onValue} from "firebase/database";
import {database} from "../firebase.config"
import {useState,useEffect} from "react";
const GetListOfData=()=>{
const [DataId,setDataId]=useState({})

useEffect(()=>{  
    var leadsRef = ref(database,'users');
      onValue(leadsRef,(snapshot)=>{
          setDataId(snapshot.val())
      });
},[]);  
  return <div className="card p-2 ">
  {Object.keys(DataId).map((key,index)=>{
  return <button key={key} className="flex justify-around w-full hover:scale-75 transition-all hover:animate-pulse my-2 rounded p-2 shadow-xl hover:shadow-inner bg-yellow-300 text-black-900 hover:bg-indigo-300 hover:text-white-800">
  <span>{index+(+1)}.</span>  
  {DataId[key].title}  
  <span className="material-icons">arrow_forward</span></button>
  })}
  </div>
}
export default GetListOfData