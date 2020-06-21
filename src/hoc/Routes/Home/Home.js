import React, { Component } from 'react';
import './Home.css';
import { lazyLoad } from '../../../helpers/intersectionObserver';
import Footer from '../../../components/UI/Footer/Footer';

import Picture1 from '../../../assets/images/Slider/picture4.jpg';
import Picture2 from '../../../assets/images/Slider/picture2.jpg';
import Picture4 from '../../../assets/images/Slider/picture3.jpg';
import Picture3 from '../../../assets/images/Slider/picture1.jpg';
import Picture5 from '../../../assets/images/Slider/picture5.jpg';

import ManThinking from '../../../assets/images/ManThinking.jpg';
import background from '../../../assets/images/homeBackground.png';
import career from '../../../assets/images/career.png';

import cheeseBurger from '../../../assets/images/menuDrawer/cheeseBurger.jpg';
import candyWafel from '../../../assets/images/menuDrawer/candyWafel.jpg';
import fatBoyBurger from '../../../assets/images/menuDrawer/bbqBurger.jpg';
import iceCreamMadness from '../../../assets/images/menuDrawer/iceCreamMadness.jpg';
import meatPizza from '../../../assets/images/menuDrawer/meatPizza.jpg';
import pepperoni from '../../../assets/images/menuDrawer/pepperoni.jpg';
import salmonRice from '../../../assets/images/menuDrawer/salmonRice.jpeg';
import tuna from '../../../assets/images/menuDrawer/tuna.jpg';

class Home extends Component {

    componentDidMount(){
        const targets = [...document.querySelectorAll('.lazyLoadHome')];
        targets.forEach(e => lazyLoad(e, 'HomeFade'));
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
                        <h1 style={{width: '100%', fontWeight: '200', fontSize: '70px', padding: '70px 0 40px 0', margin: '0'}}>Official McDeez restaurant</h1>
                        <p style={{fontFamily: 'Montserrat, sans-serif', fontSize: '20px', letterSpacing: '1px', fontWeight: '300', color: 'black', lineHeight: '30px'}}>
                            Our McDeez restoraunt provides all its users with proffesional service. <br/>
                            We have branches in: USA, Germany, Spain, Italy, Russia etc...
                        </p>
                        <div className='HomeHrDiv'></div>
                        <p style={{fontFamily: 'Montserrat, sans-serif', fontSize: '20px', letterSpacing: '1px', fontWeight: '300', color: 'black', lineHeight: '30px'}}>
                            If you are interested in all of the locatons? Click the button!
                        </p>
                        <button className='HomeHistoryButton' onClick={() => this.props.history.push('/locations')}>Locations</button>
                        
                        <div className='HomeContentContainerFirstDiv lazyLoadHome'>
                            <div className='HomeFirstDivLeft'>
                                <h1 style={{marginTop: '0'}}>If you wonder, why are we special?</h1>
                                <ul>
                                    <li><i className="fas fa-minus" style={{color: '#F44336', marginRight: '25px'}}></i>Because our users get the fastest service out there.</li>
                                    <li><i className="fas fa-minus" style={{color: '#F44336', marginRight: '25px'}}></i> Our food just tastes amazing if you have a try.</li>
                                    <li><i className="fas fa-minus" style={{color: '#F44336', marginRight: '25px'}}></i> Last but not least, Make your own food! Be creative!</li>
                                </ul>
                                <button className='HomeFristButton' onClick={() => this.props.history.push('/foodmaker')}>Have a try!</button>
                            </div>
                            <img src={ManThinking} alt='man is thinking' className='HomeFirstImgRight'/>
                        </div>

                        <div className='HomeContentContainerSecondDiv lazyLoadHome'>
                            <h1>Careers</h1>
                            <img src={career} alt='many people'/>
                            <p>
                                We would like you to join our team! <br/>
                                They work proffesionally with no mistakes <br/>
                                because we constantly improve our system. <br/>
                                In order to apply for a position as a chef <br/>
                                folow the link below and go for it! 
                            </p>
                            <div className='HomeSecondDivRight' onClick={() => this.props.history.push('/careers')}>
                                <i className="fas fa-arrow-right"  style={{fontSize: '50px', color: 'white', alignSelf: 'center', transition: '0.2s ease-out', paddingLeft: '20px'}}></i>
                            </div>
                        </div>

                        <div className='HomeContentContainerThirdDiv lazyLoadHome'>
                            <div className='HomeThirdDivHeading'>
                                <h1>Preamde Menu</h1>
                            </div>
                            <div className='HomeThirdtDivLeft'>
                                <h1>The menu gallery is here!</h1>
                                <p>
                                    We offer a variety of good food, <br/>
                                    our menu contains the most likeable food  <br/>
                                    which is of course junk food in its finest. <br/>
                                    Like what you see?  <span className='HomeGalleryLink' onClick={() => this.props.history.push('/foodmaker')}>Click here<i className="fas fa-external-link-alt"></i></span> <br/>
                                </p>
                            </div>
                            <div className='HomeThirdDivRight'>
                                <div className='GalleryDiv'>
                                    <img src={cheeseBurger} alt='this is for the gallary'/>
                                    <img src={candyWafel} alt='this is for the gallary'/>
                                    <img src={fatBoyBurger} alt='this is for the gallary'/>
                                    <img src={iceCreamMadness} alt='this is for the gallary'/>
                                    <img src={meatPizza} alt='this is for the gallary'/>
                                    <img src={pepperoni} alt='this is for the gallary'/>
                                    <img src={salmonRice} alt='this is for the gallary'/>
                                    <img src={tuna} alt='this is for the gallary'/>
                                </div>
                            </div>
                        </div>

                        <div className='HomeContentContainerForthDiv lazyLoadHome'>
                            <h1 className='HomeForthDivHeading'>Social Media</h1>
                            <div className='HomeFourthDivMain'>
                                <div style={{marginBottom: '40px'}}>
                                    <a href='https://twitter.com/explore' target="_blank" rel="noopener noreferrer">We are on <i className="fab fa-twitter" style={{marginLeft: '20px'}}></i></a>
                                </div>
                                <div style={{marginBottom: '40px'}}>
                                    <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">Folow us on <i className="fab fa-instagram" style={{marginLeft: '20px'}}></i></a>
                                </div>
                                <div>
                                    <a href='https://mail.google.com/' target="_blank" rel="noopener noreferrer">Send us an <i className="fas fa-envelope" style={{marginLeft: '20px'}}></i></a>
                                </div>
                                <div>
                                    <a href='https://www.youtube.com/' target="_blank" rel="noopener noreferrer">Watch us on <i className="fab fa-youtube" style={{marginLeft: '20px'}}></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer history={this.props.history}/>
                </div>
            </div>
        )
    }
}


export default Home;
