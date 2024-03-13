import React, { useContext } from "react"
import { Navigate,useNavigate } from "react-router-dom"
import { AuthContext } from "../context";


export const LoginPage = () => {

  
    const navigate = useNavigate();
    const { login } = useContext(AuthContext)

    const onLogin = () => {

      const lastPath = localStorage.getItem('lastPath') || '/';

        login('percy t',16);
        navigate(lastPath, {
            replace:true
        });

    }

    return (
      <div className="container">
        <h1>Login</h1>
        <hr />
        <button className="btn btn-primary"
        onClick={onLogin}
        >
            Login
        </button>
      </div>
    )
}