import {useParams,useNavigate} from "react-router-dom";
import {useState,useEffect} from "react";
import { ref, child,set, get } from "firebase/database";
import {database} from "../firebase.config";
const Forms=()=>{
  const {id} =useParams();
  const navigate=useNavigate();
  const [Ques,setQues]=useState({});
  const [Answers,setAns]=useState({});
  useEffect(()=>{
    const GetQues=()=>{
      const dbRef = ref(database);
      get(child(dbRef, `users/${id}`)).then((snapshot) => {
        if (snapshot.exists()) {
          setQues(snapshot.val());
        } else {
          navigate("/FormError")
        }
      }).catch((error) => {
        console.error(error);
      });
    }
    GetQues();
  },[id,navigate])
  const HandleAns=(e,index,obj,ques)=>{
    if(ques){
         setAns({...Answers,
                [index]:{
                  question:ques.question,
                  point:(e.target.checked===obj.checked)?ques.point:0,
                  [e.target.name]:Object.values(obj)[0]
                }
            })
    }
    else{
      setAns({...Answers,
                [index]:{
                  question:obj.question,
                  point:obj.point,
                  [e.target.name]:e.target.value
                }
            })
    }
  }
 const HandleName=(e)=>{
   setAns({...Answers,
           name:e.target.value
            })
 }
 const Submit=(e)=>{
   e.preventDefault();
   e.stopPropagation();
   const userId=new Date().getUTCMilliseconds();
  try{
     set(ref(database, 'Student/' + userId),Answers);
     navigate("/thanx")
  }
  catch(error){
    console.log(error)
  }
 }
  return (<>
 <form onSubmit={Submit} className="flex items-center flex-column justify-center">
  <h3 className="m-auto p-2 fw-bold">{Ques?.title}</h3>
  <div className="w-full">
   <div className="card d-block p-2 m-2">
     <div className="d-flex my-2">
      <p className="m-auto w-75">{`Q.what is your Name?`}</p>
     </div>
        <div  className="m-2">
          <input className="form-control" type="text" onChange={(e)=>HandleName(e)} name="name" />
        </div>
    </div>
   </div>
  {Ques?.data?.map((item,key)=>{
    return <div className="w-full" key={key}>
    {(item.type==="mcq")?
    <div className="card d-block p-2 m-2">
      <div className="d-flex my-2">
        <p className="m-auto w-75">{`Q${key+1}.${item.question.question}?`}</p>
        <div className="m-auto w-25">{`points : ${item.question.point}`}</div>
      </div>
      {item?.question?.option?.map((obj,index)=>{
        return  <div key={index} className="d-flex items-center">
          <span>{index+1}.</span>
          <div  className="form-check m-2">
          <input className="form-check-input" type="radio" onChange={(e)=>HandleAns(e,key,obj,item.question)} name="ans" id={`formCheck${key}`}/>
          <label className="form-check-label ms-4" htmlFor={`formCheck${key}`}>{Object.values(obj)[0]}</label>
        </div>
        </div>
        })}
    </div>:
    <div className="card d-block p-2 m-2">
     <div className="d-flex my-2">
      <p className="m-auto w-75">{`Q${key+1}.${item.question.question}?`}</p>
      <div className="m-auto w-25">{`points : ${item.question.point}`}</div>
     </div>
          <div  className="m-2">
            <input className="form-control" type="text" onChange={(e)=>HandleAns(e,key,item.question)} name="ans" />
          </div>
    </div>
  }
  </div>})}
   <span className="ms-2 me-auto my-4 rounded-pill btn btn-warning" onClick={Submit}>Submit</span>
  </form>
  </>)
}
export default Forms