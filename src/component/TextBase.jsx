import {useState} from "react";
const TextBase=({question})=>{
  const [State,setState]=useState({
    question:"",
    ans:"",
    point:""
  })
  const HandleState=(e)=>{
    setState({...State,
      [e.target.name]:e.target.value
    })
  }

  return (
        <div className="mb-6">
           <div className="d-flex"> 
            <input
              type="text"
              name="question"
              className="form-control block w-75 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="question"
              placeholder="enter your question"
              onChange={HandleState}
              required
            />
             <input
              type="number"
              name="point"
              className="form-control block w-25 px-2 py-1 text-sm font-light text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="point"
              placeholder="Points"
              onChange={HandleState}
              required
            />
          </div>
           <div className="m-2">
            <input 
              type="text"
              name="ans"
              value={State.ans}
              className="form-control block w-50 px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="ans"
              placeholder="answer"
              onChange={HandleState}
            />
           </div>
          <span className="btn btn-secondary" onClick={()=>question(State)}>Submit question</span>
 
         </div>
         
    )
}
export default TextBase;