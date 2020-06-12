import React, { Component } from 'react';
import './Home.css';
import Picture1 from '../../../assets/images/Slider/picture4.jpg';
import Picture2 from '../../../assets/images/Slider/picture2.jpg';
import Picture4 from '../../../assets/images/Slider/picture3.jpg';
import Picture3 from '../../../assets/images/Slider/picture1.jpg';
import Picture5 from '../../../assets/images/Slider/picture5.jpg';

import ManThinking from '../../../assets/images/ManThinking.jpg';
import background from '../../../assets/images/homeBackground.png';
import career from '../../../assets/images/career.png';

class Home extends Component {

    componentDidMount(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }

    render () {
    
        return (
            <div className='HomeContainer'>
                <ul className='HomeSlideShow'>
                    <img src={Picture1} alt='burger very good'/>
                    <img src={Picture2} alt='burger very good'/>
                    <img src={Picture3} alt='burger very good'/>
                    <img src={Picture4} alt='burger very good'/>
                    <img src={Picture5} alt='burger very good'/>
                </ul>
                <ul className='HomeSliderHeader'>
                    <div>McDeez has a special offer!</div>
                    <div>All of these burgers that you see...</div>
                    <div>They were custom made <br/> By our own users! </div>
                    <div><span>If you try to</span><span> Be creative</span></div>
                    <div>You shall recieve<br/>What you deserve!</div>
                </ul>
                <div className='HomeContent'>
                    <img src={background} alt='background home' className='HomeBackground'/>
                    <div className='HomeContentContainer'>
                    <h1 style={{width: '100%', fontWeight: '200', fontSize: '52px', letterSpacing: '3px', padding: '100px 0 100px 0', margin: '0'}}>Welcome to our proud McDeez Restaurant</h1>
                    
                    <div className='HomeContentContainerFirstDiv'>
                        <div className='HomeFirstDivLeft'>
                            <h1>If you wonder, why are we special?</h1>
                            <ul>
                                <li><i className="fas fa-minus" style={{color: '#F44336', marginRight: '25px'}}></i>Because our users get the fastest service out there.</li>
                                <li><i className="fas fa-minus" style={{color: '#F44336', marginRight: '25px'}}></i> Our food just tastes amazing if you have a try.</li>
                                <li><i className="fas fa-minus" style={{color: '#F44336', marginRight: '25px'}}></i> Last but not least, Make your own food! Be creative!</li>
                            </ul>
                            <button className='HomeFristButton' onClick={() => this.props.history.push('/foodmaker')}>Have a try!</button>
                        </div>
                        <img src={ManThinking} alt='man is thinking' className='HomeFirstImgRight'/>
                    </div>

                    <div className='HomeContentContainerSecondDiv'>
                        <h1>Careers</h1>
                        <img src={career} alt='many people'/>
                        <p>
                            We would like you to join our team! <br/>
                            They work proffesionally with no mistakes <br/>
                            because we constantly improve our system. <br/>
                            In order to apply for a position as a chef <br/>
                            folow the link below and go for it! 
                        </p>
                        <div className='HomeSecondDivRight'>
                            <i className="fas fa-arrow-right"  style={{fontSize: '50px', color: 'white', alignSelf: 'center', transition: '0.2s ease-out', paddingLeft: '20px'}}></i>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        )
    }
}


export default Home;





// {/* <div className='SliderDiv'>
//                     <div className='ImgDiv'>
//                         <img src='https://media.bizj.us/view/img/10100451/burger*750xx2020-1142-0-256.jpg' alt='the slider'/>
//                     </div>
//                     <div className='UlDiv'>
//                         <h2>You say, We make!</h2>
//                         <ul>
//                             <li>See Examples</li>
//                             <li>Meet the Experts</li>
//                             <li>You have a Cupon?</li>
//                         </ul>
//                     </div>
//                 </div>
//                 <h1 style={{marginTop: '50px', marginBottom: '100px'}}>Some text over here</h1>
//                 <div className='FirstCard'>
//                     <img src={SpeachBubble} alt='speach bubble' className='SpeechBubble'/>
//                     <img src={ManThinking} alt='man thinking' className='ManThinking'/>
//                 </div> */}