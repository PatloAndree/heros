import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {

    const heroes = getHeroesByPublisher( publisher );

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
              heroes.map(hero => (
                <HeroCard key={hero.id} {...hero}/>
                
                // <li key={hero.id}>
                //     {hero.superhero}
                // </li>
              ))
            }
        </div>
    )

}