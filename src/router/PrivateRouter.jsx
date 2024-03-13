import { Route, Routes, Navigate, useLocation } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { DcPage,MarvelPage,HeroesRoutes } from "../heroes"
import { useContext } from "react"
import { AuthContext } from "../auth"

export const PrivateRouter = ({children}) => {

    const { logged } = useContext(AuthContext);

    const {pathname,search} = useLocation();

    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);

    return (logged) 
    ?
    children
    :
    <Navigate to="/login"/>
}