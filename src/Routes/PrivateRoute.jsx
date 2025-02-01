import { useContext } from "react"
import { ContextProvider } from "../Context/Context"
import PropTypes from 'prop-types'
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(ContextProvider);
    if(loading) {
        return (
            <div className="min-h-screen w-full justify-center items-center">
                    <span className="loading loading-infinity loading-lg"></span>
            </div>
        )
    }
    if(user) {
        return children
    }
  return (
    <Navigate to={"/login"}></Navigate>
  )
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PrivateRoute