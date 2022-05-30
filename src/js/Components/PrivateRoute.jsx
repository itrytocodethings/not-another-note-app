import React, {useContext} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Context } from '../store/Context';

const PrivateRoute = ({children}) => {
  const {store, actions} = useContext(Context);
  const navigate = useNavigate();
  //if no user logged in, redirect user to register/login wtih Navigate.
  // else return the child component of the PrivateRoute
  if (!store.isLoggedIn) return <Navigate to="/register" />
  else return children 
}

export default PrivateRoute;