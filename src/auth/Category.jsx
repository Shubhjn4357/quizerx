import {Link} from "react-router-dom";
const Category=()=>{
  return (<>
  <h1 className="text-blue m-2 text-xl">Login For </h1>
  <nav>
   <button
    type="button"
    className="inline-block my-3 px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" >
    <Link className="text-decoration-none text-white" to="/auth/login/teacher">Teacher</Link>
    </button>
   <button
    type="button"
    className="inline-block my-3 px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" >
    <Link className="text-decoration-none text-white" to="/auth/login/student">Student</Link>
    </button>
  </nav>
  </>)
}
export default Category;