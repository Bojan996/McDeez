import React, { Component } from 'react';
import './Home.css';
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

                        <div className='HomeContentContainerThirdDiv'>
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

                        <div className='HomeContentContainerForthDiv'>
                            <h1 className='HomeForthDivHeading'>Summarize</h1>
                            <div className='HomeFourthDivMain'>
                                <div style={{marginBottom: '40px'}}>
                                    <a href='https://twitter.com/explore'>We are on <i className="fab fa-twitter" style={{marginLeft: '20px'}}></i></a>
                                </div>
                                <div style={{marginBottom: '40px'}}>
                                    <a href='https://www.instagram.com/'>Folow us on <i className="fab fa-instagram" style={{marginLeft: '20px'}}></i></a>
                                </div>
                                <div>
                                    <a href='https://mail.google.com/'>Send us an <i className="fas fa-envelope" style={{marginLeft: '20px'}}></i></a>
                                </div>
                                <div>
                                    <a href='https://www.youtube.com/'>Watch us on <i className="fab fa-youtube" style={{marginLeft: '20px'}}></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
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