import RouterModule from "./RouterModule";
import {useEffect,useState} from "react";
import {useNavigate} from "react-router-dom";
import {auth} from "./firebase.config";
import ErrorRoute from "./ErrorRoute";
import { onAuthStateChanged } from "firebase/auth";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Dashboard from "./component/Dashboard";

const App=()=>{
  const navigate=useNavigate();
  const [Loged,setLoged]=useState(false);
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        if(user){
          setLoged(true)
        }
        else{
          setLoged(false)
        }
        // ...
    });
  },[navigate])
  return (
    <div className="App">
      <Dashboard loged={Loged}/>
      {Loged?<RouterModule/>:<ErrorRoute/>}
   </div>
  );
}

export default App;
