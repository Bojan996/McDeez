import React, { Component } from 'react';
import './History.css';
import { lazyLoad } from '../../../helpers/intersectionObserver';
import Footer from '../../../components/UI/Footer/Footer';

import mainImage from '../../../assets/images/History/mainImage.jpg';
import firstLittleImage from '../../../assets/images/History/firstLittleImage.jpg';
import thirdLittleImage from '../../../assets/images/History/thirdLittleImage.jpg';
import secondLittleImage from '../../../assets/images/History/secondLittleImage.jpg';
import firstDivImage from '../../../assets/images/History/firstDivImage.jpg';
import secondDivImage from '../../../assets/images/History/secondDivImage.jpg';
import thirdDivImage from '../../../assets/images/History/thirdDivImage.jpg';


class History extends Component {

    componentDidMount(){
        const targets = [...document.querySelectorAll('.lazyLoadHistory')];
        targets.forEach(e => lazyLoad(e, 'HistoryFade'));
    }

    render(){

        return (
            <div className='HistoryContainer'>
                <div className='HHeadingSection'>
                    <h1 className='HMainHeader'>McDeez in 1920's, USA</h1>
                    <img className='HHeadingImage' src={mainImage} alt='restaurant'/>
                    <div className='HThreeLittleImages'>
                            <img src={firstLittleImage} alt='restaurant'/>
                            <img src={secondLittleImage} alt='restaurant'/>
                            <img src={thirdLittleImage} alt='restaurant'/>
                    </div>
                </div>
                <h1 className='HistoryContentMainHeader'>Checkout our history</h1>
                <div className='HistoryContentSection'>
    
                    <div className='HistoryFirstDiv lazyLoadHistory'>
                        <div className='FirstDivText'>
                            <h1>McDeez was formed long time ago!</h1>
                            <p>- This was the classiest restaruant that you could find at the year 1926, and gues what? McDeez got it! We nailed it with this one, it was a success.</p>
                        </div>
                        <img src={firstDivImage} alt='restaurant'/>
                    </div>
    
                    <div className='HistorySecondDiv lazyLoadHistory'>
                        <img src={secondDivImage} alt='restaurant'/>
                        <div className='SecondDivText'>
                            <h1>It's not all borring, meet our hostess</h1>
                            <p>- We were thinking, okay we got good food, we got good locations, something is missing... Oh, of course! Beautiful girls! This was a little tricky because of the law back then, but then again, we are McDeez</p>
                        </div>
                    </div>
    
                    <div className='HistoryThirdDiv lazyLoadHistory'>
                        <div className='ThirdDivText'>
                            <h1>This was how we served people</h1>
                            <p>- In the past, it was very different. You had to obay the rules of service which were set in this restaurant in 1927 by the law. See houw classy this is. We bet that we did it right!</p>
                        </div>
                        <img src={thirdDivImage} alt='restaurant'/>
                    </div>
    
                </div>
                <div className='HistoryLinkSection lazyLoadHistory'>
                    <h1>Let's go and enjoy McDeez services</h1>
                    <div className='HistoryLinkContent'>
                        <div>
                            <p onClick={() => this.props.history.push('/foodmaker')}>Try our Menu</p>
                        </div>
                        <div>
                            <p onClick={() => this.props.history.push('/locations')}>See our Locations</p>
                        </div>
                        <div>
                            <p onClick={() => this.props.history.push('/careers')}>Go to Careers</p>
                        </div>
                        <div>
                            <p onClick={() => this.props.history.push('/')}>Checkout Home</p>
                        </div>
                    </div>
                </div>
                <Footer history={this.props.history}/>
            </div>
        )

    }

}


export default History;