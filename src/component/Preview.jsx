import {useParams,Link} from "react-router-dom";
const Preview=()=>{
  const {link}=useParams()
  return (
    <div className="d-flex 100-vh justify-center align-center">
      <div className="link-primary btn btn-warning">
        <Link className="text-decoration-none" to={`/form/student/${link}`}>student/{link}</Link>
      </div>
    </div>
    )
}
export default Preview;