import { Link, NavLink, useNavigate } from 'react-router-dom';
import React, { useContext } from "react"
import { AuthContext } from '../../auth';


export const Navbar = () => {

    const { user , logout } = useContext(AuthContext);

    // console.log("soy",user?.name);
    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login', {
            replace:true
        });

    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark w-100 p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/search"
                    >
                        Search
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/hero"
                    >
                        Hero
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    {/* <NavLink 
                        className="nav-item nav-link" 
                        to="/login"
                    >
                        Logout
                    </NavLink> */}

                    <span className='nav-item nav-link text-primary'>
                        {user?.name}
                        ---
                        {user?.id}

                    </span>
                    <button className='nav-item nav-link btn'
                        onClick={onLogout}
                    > 
                        Salir
                    </button>
                </ul>
            </div>
        </nav>
    )
}