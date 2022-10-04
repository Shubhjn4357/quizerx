import {Route,Routes,Navigate} from "react-router-dom";
import { Suspense,lazy } from 'react';
const Login =lazy(()=> import("./auth/Login"));
const SignUp =lazy(()=>import("./auth/SignUp"));

const ErrorRoute=()=>{
  return (<Routes>

   <Route  path="/auth/login/teacher" element={<Suspense fallback={"Loading..."}><Login/></Suspense>}/>
   <Route  path="/auth/signup/teacher" element={<Suspense fallback={"Loading..."}><SignUp/></Suspense>}/>
   <Route path="/" element={<Navigate to="/auth/login/teacher" replace />}/>
  </Routes>)
}
export default ErrorRoute;