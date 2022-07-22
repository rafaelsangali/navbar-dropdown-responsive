import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function Private({ }: JSX.Element){
  const {authenticated} = useContext(AuthContext)

  if(!authenticated){
    return <Navigate to="/login"
  }
  
}

// parei aqui