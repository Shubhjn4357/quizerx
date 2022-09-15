import {useState} from "react";
const Mcq=({question})=>{
  const [State,setState]=useState({
    question:"",
    point:"",
    option:[
      {1:"",checked:false},
      {2:"",checked:false},
      ]
  })
  
  const HandleState=(e)=>{
    setState({...State,
      [e.target.name]:e.target.value
    })
  }
const HandleOption=(e, itemId, property)=> {
    const value = e.target.value;
    
    //copying data to temp variable so that we do not directly mutate original state
    const Options = [...State.option];
    //findIndex to find location of item we need to update
    let index = Options.findIndex((item)=> Object.keys(item)[0]=== itemId);
    // -1 check to see if we found that object in working hours
    
    if(index !== -1){
       Options[index] = {
         ...Options[index], //keeping existing values in object
         [property]: value  //here property can be "price" or "description"
       }
    }
    
    setState({ ...State,option : Options})
}
const HandleChecked=(e, itemId, property)=> {
    setState({ ...State,option : State.option.map((item)=>{
      if(Object.keys(item)[0]=== itemId){
        return item={
          ...item,
          checked:true
        }
      }
     return  item={...item,checked:false}
    })})
}
const Remove=(itemId)=> {
   setState({
     ...State,
     option : State.option.filter((item)=> Object.keys(item)[0]!== itemId)
})
    
}
  const AddOption=(id)=>{
     
     setState({...State,
      option:[...State.option,
          {[id]:"" ,checked:false}
     ]
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
          {State.option.map((item,index)=>{
            
            return (
           <div className="m-2 form-check" key={index}>
          <input className="form-check-input" type="radio" onChange={(e)=>HandleChecked(e,Object.keys(item)[0],"checked")} name="checked" id="flexRadioDefault1"/>
          <label className="form-check-label" htmlFor="flexRadioDefault1">
                    <input 
                      type="text"
                      name={index+1}
                      
                      value={item[index+1]}
                      className="form-control w-75 px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id={index}
                      placeholder={`option ${index+1}`}
                      onChange={(e)=>HandleOption(e,Object.keys(item)[0],index+1)}
                      required
                        />
            </label>
              <span className="material-icons" onClick={()=>Remove(Object.keys(item)[0])}>
                   close
              </span>
           </div>
              )
          })}
          <span className="btn btn-primary" onClick={()=>AddOption(State.option.length+1)}>Add Option</span>
          <span className="btn btn-secondary" onClick={()=>question(State)}>Submit question</span>
 
         </div>
         
    )
}
export default Mcq;