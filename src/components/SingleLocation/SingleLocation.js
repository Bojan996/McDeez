import React, { Component } from 'react';
import './SingleLocation.css';

import { restaurantImages } from '../../helpers/switchStatements';


class SingleLocation extends Component {

    render(){

        const image = restaurantImages(this.props.match.params.id);
        

        return (
            <div className='SingleLocationContainer'>
                <h1>Welcome to the single locaton!</h1>
                <h1>{this.props.match.params.id}</h1>
                {image}
                <iframe title='just a map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.39056878075!2d20.45867831549847!3d44.81360727909873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aae086eb971%3A0x4e105d18dffd9fb7!2sTerazije%2023%2C%20Beograd%2011000!5e0!3m2!1sen!2srs!4v1592348098596!5m2!1sen!2srs" width="600" height="450" frameborder="0" style={{border: '0'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        )

    }

}


export default SingleLocation;