import {useParams,Link} from "react-router-dom";
const Preview=()=>{
  const {link}=useParams()

  return (
    <div className="d-flex justify-center align-center">
      <div className="link-primary">
        <Link to={`dashboard/student/${link}`}>student/{link}</Link>
      </div>
    </div>
    )
}
export default Preview;