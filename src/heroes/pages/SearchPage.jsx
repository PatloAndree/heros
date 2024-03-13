import React from "react"
import { useForm } from "../../hook/useForm"
import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string'
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components/HeroCard";



export const SearchPage = () => {

    const navigate = useNavigate();
    const locacion = useLocation();

    
    const {q = ''} = queryString.parse(locacion.search);

    const heroes = getHeroesByName(q);
    // console.log("hola soy",heroes);

    const {searchText, onInputChange} = useForm({
        searchText: q
    });


    const onSearchSubmit = (event) => {
        event.preventDefault();
        if(searchText.trim().length <= 1) return;

        navigate(`?q=${searchText}`);
    }


    return (
    <>
        <div className="w-100">
            <h1>Busqueda</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form action="
                    " onSubmit={onSearchSubmit}>
                        <input 
                        type="text"
                        placeholder="buscar"
                        className="form-control"
                        name="searchText"
                        autoComplete="off"
                        value={searchText}
                        onChange={onInputChange}
                        />
                        <button className="btn btn-primary mt-1"> 
                        Buscar
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>results</h4>
                    <hr />
                    {
                        (q === '') 
                        ?
                        <div className="alert alert-primary"> Search a hero
                        </div>
                        :
                        (heroes.length === 0) && 
                        <div className="alert alert-danger">
                            No hay resultados {q}
                        </div>

                    }
                  
                    {
                        heroes.map(hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                    }


                </div>

                {/* <HeroCard/> */}


            </div>
        </div>
    </>
    )
}