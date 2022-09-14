import {sendEmailVerification} from "firebase/auth";
import {auth} from "../firebase.config";
import {useState} from "react";
const Verify=()=>{
  const [state,setState] =useState(false)
  const SendLink=()=>{
    sendEmailVerification(auth.currentUser)
        .then((x) => {         
          // Email verification sent!
          // ...
          console.log("sent email")
        });
  }
  
  return (<>
  <div className="card p-2 d-flex 100-vh align-center justify-center">
       <div className=" btn-pill btn btn-warning">
        <Link className="text-decoration-none" onClick={()=>setState(true)}>Verify Email</Link>
        <span className="text-success bg-success p-2">Verification email sent please check your inbox or spam folder</span>
      </div>
  </div>
  </>)
}
export default Verify