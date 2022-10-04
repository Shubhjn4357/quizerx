import { Suspense,lazy } from 'react';
import {Route,Navigate,Routes} from"react-router-dom";
const Forms =lazy(()=>import("./component/Forms"));
const FormError=lazy(()=> import("./component/FormError"));
const Thanx=lazy(()=> import("./component/Thanx"));
const CreaterComponent=lazy(()=> import("./component/CreaterComponent"));
const GetListOfData=lazy(()=> import("./component/GetListOfData"));
const NotFound =lazy(()=>import("./auth/NotFound"));
const RouterModule=()=>{
  return (<Routes>
    <Route  path="/list/ques" element={<Suspense fallback={"Loading..."}><GetListOfData/></Suspense>}/>
    <Route  path="/create" element={<Suspense fallback={"Loading..."}><CreaterComponent/></Suspense>}/>
    <Route  path="/thanx" element={<Suspense fallback={"Loading..."}><Thanx/></Suspense>}/>
    <Route  path="/form/student/:id" element={<Suspense fallback={"Loading..."}><Forms/></Suspense>}/>
    <Route  path="/formError" element={<Suspense fallback={"Loading..."}><FormError/></Suspense>}/>
    <Route
        path="/"
        element={<Navigate to="/create" replace />}
    />
   <Route path="*" element={<Suspense fallback={<>"Loading..."</>}><NotFound/></Suspense>}/>
 
  </Routes>)
}
export default RouterModule;