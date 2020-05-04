import React, { Component } from 'react';
import './Home.css';
import ManThinking from '../../../assets/images/ManThinking.png';
import SpeachBubble from '../../../assets/images/SpeakingBubble.png';

class Home extends Component {
    render () {
        return (
            <div className='HomeContainer'>
                <div className='SliderDiv'>
                    <div className='ImgDiv'>
                        <img src='https://media.bizj.us/view/img/10100451/burger*750xx2020-1142-0-256.jpg' alt='the slider'/>
                    </div>
                    <div className='UlDiv'>
                        <h2>You say, We make!</h2>
                        <ul>
                            <li>See Examples</li>
                            <li>Meet the Experts</li>
                            <li>You have a Cupon?</li>
                        </ul>
                    </div>
                </div>
                <h1 style={{marginTop: '50px', marginBottom: '100px'}}>Some text over here</h1>
                <div className='FirstCard'>
                    <img src={SpeachBubble} alt='speach bubble' className='SpeechBubble'/>
                    <img src={ManThinking} alt='man thinking' className='ManThinking'/>
                </div>
            </div>
        )
    }
}


export default Home;