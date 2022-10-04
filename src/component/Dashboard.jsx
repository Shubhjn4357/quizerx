import { useState } from "react";
import {Link} from "react-router-dom";
import {signOut} from "firebase/auth";
import {auth} from "../firebase.config";

const Dashboard=({loged})=>{
    const [navbar, setNavbar] = useState(false);
const logout=()=>{
 signOut(auth).then(() => {
   console.log("byy")
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
    console.log(error)
  });
}
    return (
        <nav className="w-full bg-orange-500 shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link className="text-decoration-none" to="/">
                            <h2 className="text-2xl font-bold text-white">QuiezX</h2>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "flex" : "hidden"
                        }`}
                    >
                       {loged?<ul className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-indigo-200">
                                <Link className="text-decoration-none text-white" to="/list/ques">Your Question</Link>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <Link className="text-decoration-none text-white" to="/create">Create</Link>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <Link className="text-decoration-none text-white" to="/setting">setting</Link>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <Link className="text-decoration-none text-white" to="/about">About US</Link>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <Link className="text-decoration-none text-white" to="/contact">Contact US</Link>
                            </li>
                            <li>
                                <button className=" bg-red-500 text-black-800  rounded w-24 hower:rounded-full p-2 hower:text-skyblue-300 hower:bg-red-300" onClick={logout}>Log Out</button>
                            </li>
                        </ul>
                  :<>
                   <div className="mt-3 space-y-2 md:hidden lg:inline-block">
                    <Link
                        to="/auth/login/teacher"
                        className="inline-block text-decoration-none w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    >
                        Sign in
                    </Link>
                    <Link 
                        to="/auth/signup/teacher"
                        className="inline-block text-decoration-none w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                    >
                        Sign up
                    </Link>
                </div></>
                }
                    </div>
                </div>
               {loged?"":<div className="hidden space-x-2 md:inline-block">
                    <Link 
                        to="/auth/login/teacher"
                        className="px-4 py-2 text-decoration-none text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    >
                        Sign in
                    </Link>
                    <Link 
                        to="/auth/signup/teacher"
                       className="px-4 py-2 text-decoration-none text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                    >
                        Sign up
                    </Link>
                </div>}
            </div>
        </nav>
    );
}
export default Dashboard ;