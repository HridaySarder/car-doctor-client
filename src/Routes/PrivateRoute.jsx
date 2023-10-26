import { useContext } from "react";
import { AuthCotext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

  const {user,loading} = useContext(AuthCotext)
const location = useLocation();

  if(loading){
    return <progress className="progress w-56"></progress>
  }

if(user?.email){
  return children;
}

return <Navigate to={'/login'} replace></Navigate>

  return (
    <div>
      
    </div>
  );
};

export default PrivateRoute;