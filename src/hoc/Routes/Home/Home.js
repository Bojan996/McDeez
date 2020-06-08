import React, { Component } from 'react';
import './Home.css';
import Picture1 from '../../../assets/images/Slider/picture4.jpg';
import Picture2 from '../../../assets/images/Slider/picture2.jpg';
import Picture4 from '../../../assets/images/Slider/picture3.jpg';
import Picture3 from '../../../assets/images/Slider/picture1.jpg';
import Picture5 from '../../../assets/images/Slider/picture5.jpg';

// import ManThinking from '../../../assets/images/ManThinking.png';
// import SpeachBubble from '../../../assets/images/SpeakingBubble.png';

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
                    <h1>Hello ther and welcome to our Home page</h1>
                    <p>Helooo</p>
                    <p>Helooo</p>
                    <p>Helooo</p>
                    <p>Helooo</p>
                    <p>Helooo</p>
                    <p>Helooo</p>
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