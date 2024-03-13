import { getHeroesByPublisher } from '../helpers';
import { Route, Routes, Navigate, Link } from "react-router-dom"


export const HeroCard = ({ 
    id,superhero,publisher,alter_ego,first_appearance,characters
 }) => {

    const heroImage = `/assets/heroes/marvel-wolverine.jpg`;
    // console.log(`${id}`);

    return (
        <div className='col'>
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={ heroImage } className="card-img" alt='superhero' />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className='card-title'>
                                {superhero}
                            </h5>
                            <p>{alter_ego}</p>
                            {
                                (
                                    alter_ego !== characters 
                                ) && 
                                (
                                    <p> {characters }</p>
                                )
                            }
                            <p className='card-text'>
                                <small className='text-muted'>{first_appearance}</small>
                            </p>
                            <Link to={`/hero/${id}`}>
                                ver mas...
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className='row rows-cols-1 row-cols-md-3 g-3'>
        //     {
        //       heroes.map(hero => (
        //         <li key={hero.id}>
        //             {hero.superhero}
        //         </li>
        //       ))
        //     }
        // </div>
    )

}