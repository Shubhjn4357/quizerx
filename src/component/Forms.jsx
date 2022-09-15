import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import { ref, child, get } from "firebase/database";
import {database} from "../firebase.config"
const Forms=()=>{
  const {id} =useParams()
  const [Ques,setQues]=useState({})
  const [Answers,setAns]=useState({1:{
    question:"",
    result:""
  }})
  useEffect(()=>{
    const GetQues=()=>{
      const dbRef = ref(database);
      get(child(dbRef, `users/${id}`)).then((snapshot) => {
        if (snapshot.exists()) {
          setQues(snapshot.val());
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    }
    GetQues();
  },[id])
  const HandleAns=(e,obj)=>{
    if(e.target.value===obj.checked){
        setAns({...Answers,
            [Object.keys(obj)[0]]:{
              question:obj.question,
              result:obj.point
            }
        })
    }
  }
  console.log("Questions",Ques)
  console.log("Answers",Answers)
  return (<>
  <form className="flex items-center flex-column justify-center">
  {Ques?.data?.map((item,key)=>{
    return <div className="w-full" key={key}>
    {(item.type==="mcq")?
    <div className="card d-block p-2 m-2">
      <div className="ms-auto w-full my-2">{`points ${item.question.point}`}</div>
      <p className="me-auto">{`Q${key+1}.${item.question.question}?`}</p>
      {item?.question?.option?.map((obj,index)=>{
        return  <div key={index} className="d-flex items-center">
          <span>{index+1}.</span>
          <div  className="form-check m-2">
          <input className="form-check-input" type="radio" onChange={(e)=>HandleAns(e,obj)} name="ans" id={`formCheck${key}`}/>
          <label className="form-check-label" htmlFor={`formCheck${key}`}>{Object.values(obj)[0]}</label>
        </div>
        </div>
        })}
    </div>:
    <div>textbase</div>}
    </div>
  })}
  <button type="submit" className="ms-2 me-auto my-4 rounded-pill btn btn-warning">Submit</button>
  </form>
  </>)
}
export default Forms