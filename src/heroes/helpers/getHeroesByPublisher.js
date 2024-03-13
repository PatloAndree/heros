import {heroes} from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {
    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if (!validPublishers.includes(publisher)) {
        throw new Error(`${publisher} error no es un publisher`);
    }
    
    return heroes.filter(hero => hero.publisher === publisher);
}
