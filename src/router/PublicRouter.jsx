import { Route, Routes, Navigate } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { DcPage,MarvelPage,HeroesRoutes } from "../heroes"
import { useContext } from "react"
import { AuthContext } from "../auth"

export const PublicRouter = ({children}) => {

    const { logged } = useContext(AuthContext);

    return (logged) 
    ?
    // children
    <Navigate to="/"/>
    :
    children

}