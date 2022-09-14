import RouterModule from "./RouterModule";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {auth} from "./firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  const navigate=useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        if(user.emailVerified){
          console.log("verified")
        }
        else{
          
          navigate("/verify")
          console.log("please verify to proceed")
        }
        // ...

    });
  },[navigate])
  return (
    <div className="App">
      <RouterModule/>
    </div>

  );
}

export default App;
