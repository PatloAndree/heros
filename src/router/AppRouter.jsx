import { Route, Routes, Navigate } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { DcPage,MarvelPage,HeroesRoutes } from "../heroes"
import { PrivateRouter } from "./PrivateRouter"
import { PublicRouter } from "./PublicRouter"

export const AppRouter = () => {
    return (
    <>
        <Routes>

            <Route path="Login/*" 
                element={
                    <PublicRouter>
                        {/* <LoginPage/> */}
                        <Routes>
                            <Route path="/*" element={<LoginPage/>} />
                        </Routes>
                    </PublicRouter>
                }
            >
            </Route>
            {/* <Route path="login" element={<LoginPage/>} /> */}

            <Route path="/*" 
                element={
                    <PrivateRouter>
                        <HeroesRoutes/>
                    </PrivateRouter>
                }
            >
            </Route>
            {/* <Route path="/*" element={<HeroesRoutes/>} /> */}
        </Routes>
    </>
    )
}