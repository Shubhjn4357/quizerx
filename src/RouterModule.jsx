import {Routes,Route} from "react-router-dom";
import Category from "./auth/Category";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import Dashboard from "./component/Dashboard";
import Forms from "./component/Forms";
import Preview from "./component/Preview";
const RouterModule=()=>{
  return (<>
  <Routes>
    <Route exact path="/" element={<Category/>}/>
    <Route exact path="/dashboard/teacher" element={<Dashboard/>}/>
    <Route exact path="/form/student/:id" element={<Forms/>}/>
    <Route exact path="/preview/:link" element={<Preview/>}/>
    <Route exact path="/auth/login/:cat" element={<Login/>}/>
    <Route exact path="/auth/signup/:cat" element={<SignUp/>}/>
  </Routes>
  </>)
}
export default RouterModule;