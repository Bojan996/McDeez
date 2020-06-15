import React, {Component} from 'react';
import './Location.css';

import locationHeading from '../../../assets/images/LocationHeading.png';

import belgradeRestaurant from '../../../assets/images/Restaurants/belgradeRestaurant.jpg';
import washingtonRestaurant from '../../../assets/images/Restaurants/washingtonRestaurant.jpg';
import tokyoRestaurant from '../../../assets/images/Restaurants/tokyoRestaurant.jpg';
import madridRestaurant from '../../../assets/images/Restaurants/madridRestaurant.jpg';
import romeRestaurant from '../../../assets/images/Restaurants/romeRestaurant.jpg';
import beijingRestaurant from '../../../assets/images/Restaurants/beijingRestaurant.jpg';
import moscowRestaurant from '../../../assets/images/Restaurants/moscowRestaurant.jpg';
import munichRestaurant from '../../../assets/images/Restaurants/munichRestaurant.jpg';

class Location extends Component {

    state = {
        locations: {
            Belgrade: {
                founded: '06/16/2003',
                image: belgradeRestaurant,
                description: 'This is our restaurant in belgrade which is really good!'
            },
            Washington: {
                founded: '12/05/2001',
                image: washingtonRestaurant,
                description: 'The restaurant in Washington DC is one of the finest!'
            },
            Munich: {
                founded: '07/01/2005',
                image: munichRestaurant,
                description: 'The restaurant in Washington DC is one of the finest!'
            },
            Madrid: {
                founded: '02/27/2003',
                image: madridRestaurant,
                description: 'The restaurant in Washington DC is one of the finest!'
            },
            Rome: {
                founded: '09/14/2007',
                image: romeRestaurant,
                description: 'The restaurant in Washington DC is one of the finest!'
            },
            Beijing: {
                founded: '06/25/2008',
                image: beijingRestaurant,
                description: 'The restaurant in Washington DC is one of the finest!'
            },
            Moscow: {
                founded: '10/12/2001',
                image: moscowRestaurant,
                description: 'The restaurant in Washington DC is one of the finest!'
            },
            Tokyo: {
                founded: '04/25/2010',
                image: tokyoRestaurant,
                description: 'The restaurant in Washington DC is one of the finest!'
            }
        }
    }

    render() {

        const restaurantCards = Object.keys(this.state.locations).map(e => {
            return (
                <div className='LocationRestaurantCard'>
                    <img src={this.state.locations[e].image} alt='restaruant beautiful' className='LocationRestaurantCardImage'/>
                    <div className='LocationRestaurantCardContent'>
                        <h1>{e}</h1>
                        <p>{this.state.locations[e].description}</p>
                        <div style={{display: 'flex', justifyContent: 'space-around'}}>
                            <span>{this.state.locations[e].founded}</span>
                            <button>More info</button>
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <div className='LocationContainer'>
                <div className='LocationPictureHeading'>
                    <img src={locationHeading} alt='location heading'/>
                </div>
                <h1 className='LocationHeading'>Take a look at our restaurants</h1>
                <div className='LocationContent'>
                    {restaurantCards}
                </div>
            </div>
        )

    }

}


export default Location;