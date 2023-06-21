import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({children}) => {
    const isAuth= useSelector((state)=>state.isAuth)
    if(isAuth){
        return children
    }else{
        return <Navigate to={"/login"}/>
    }


}

export default PrivateRoute