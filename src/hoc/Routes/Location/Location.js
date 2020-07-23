import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { lazyLoad } from '../../../helpers/intersectionObserver';
import './Location.css';
import Footer from '../../../components/UI/Footer/Footer';

import locationHeading from '../../../assets/images/LocationHeading.png';
import locationHeadingMini from '../../../assets/images/worldMap.png';

import belgradeRestaurant from '../../../assets/images/Restaurants/belgradeRestaurant.jpg';
import washingtonRestaurant from '../../../assets/images/Restaurants/washingtonRestaurant.jpg';
import tokyoRestaurant from '../../../assets/images/Restaurants/tokyoRestaurant.jpg';
import madridRestaurant from '../../../assets/images/Restaurants/madridRestaurant.jpg';
import romeRestaurant from '../../../assets/images/Restaurants/romeRestaurant.jpg';
import beijingRestaurant from '../../../assets/images/Restaurants/beijingRestaurant.webp';
import moscowRestaurant from '../../../assets/images/Restaurants/moscowRestaurant.jpg';
import munichRestaurant from '../../../assets/images/Restaurants/munichRestaurant.jpg';

const location = (props) => {

    useEffect(() => {
        const targets = [...document.querySelectorAll('.lazyLoadLocation')];
        targets.forEach(e => lazyLoad(e, 'LocationFade'));
    }, []);

    const [ locations ] = useState({
        Belgrade: {
            founded: '06/16/2003',
            image: belgradeRestaurant,
            description: 'Our Belgrade restaurant has a beautiful view, check it out!'
        },
        Washington: {
            founded: '12/05/2001',
            image: washingtonRestaurant,
            description: 'Rustic and old fashion was our choice for this location.'
        },
        Munich: {
            founded: '07/01/2005',
            image: munichRestaurant,
            description: 'Classy restaurant which for sure is worth visiting, bon appetit!'
        },
        Madrid: {
            founded: '02/27/2003',
            image: madridRestaurant,
            description: 'Madrid is a beautiful place, now you can enjoy it with McDeez!'
        },
        Rome: {
            founded: '09/14/2007',
            image: romeRestaurant,
            description: 'Do you enjoy the Colosseum? Well just take a look at this!'
        },
        Beijing: {
            founded: '06/25/2008',
            image: beijingRestaurant,
            description: 'Chinese food is pretty good... But McDeez is the best!'
        },
        Moscow: {
            founded: '10/12/2001',
            image: moscowRestaurant,
            description: 'This time we decided to change. Just relax and drink a beer!'
        },
        Tokyo: {
            founded: '04/25/2010',
            image: tokyoRestaurant,
            description: 'What place to finish our empire than Tokyo. Very classy.'
        }
    });


    const restaurantCards = Object.keys(locations).map(e => {
        return (
            <div className='LocationRestaurantCard lazyLoadLocation' key={e}>
                <img src={locations[e].image} alt='restaruant beautiful' className='LocationRestaurantCardImage'/>
                <div className='LocationRestaurantCardContent'>
                    <h1>{e}</h1>
                    <p>- {locations[e].description}</p>
                    <div className='LocationTimeSinceAndButton'>
                        <span className='LocationTimeSince'><span className='LocationSinceSpan'>Since:</span> {locations[e].founded}</span>
                        <Link to={{
                                    pathname:'/locations/' + e,
                                    search: '?q=' + e
                                }}
                            ><button>More info</button></Link>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div className='LocationContainer'>
            <div className='LocationPictureHeading'>
                <img className='LocationHeadingImageMini' src={locationHeadingMini} alt='location Heading'/>
                <img className='LocationHeadingImage' src={locationHeading} alt='location heading'/>
            </div>
            <h1 className='LocationHeading'>Take a look at our restaurants</h1>
            <div className='LocationContent'>
                {restaurantCards}
            </div>
            <Footer history={props.history}/>
        </div>
    );

}


export default location;