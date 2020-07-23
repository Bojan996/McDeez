import React, { useEffect } from 'react';
import './History.css';
import { lazyLoad } from '../../../helpers/intersectionObserver';
import Footer from '../../../components/UI/Footer/Footer';

import mainImage from '../../../assets/images/History/mainImage.jpg';
import mainImageMini from '../../../assets/images/History/mainImageMini.jpg'
import firstLittleImage from '../../../assets/images/History/firstLittleImage.jpg';
import thirdLittleImage from '../../../assets/images/History/thirdLittleImage.jpg';
import secondLittleImage from '../../../assets/images/History/secondLittleImage.jpg';
import firstDivImage from '../../../assets/images/History/firstDivImage.jpg';
import secondDivImage from '../../../assets/images/History/secondDivImage.jpg';
import thirdDivImage from '../../../assets/images/History/thirdDivImage.jpg';


const history = (props) => {

    useEffect(() => {
        const targets = [...document.querySelectorAll('.lazyLoadHistory')];
        targets.forEach(e => lazyLoad(e, 'HistoryFade'));
    }, []);


    return (
        <div className='HistoryContainer'>
            <div className='HHeadingSection'>
                <h1 className='HMainHeader'>McDeez <span> in </span>1920's<span>, USA</span></h1>
                <img className='HHeadingImageMini' src={mainImageMini} alt='The restaurant'/>
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
                        <h1>McDeez was <span>formed</span> long time ago!</h1>
                        <p>- This was the classiest restaruant that you could find at the year 1926, and gues what? McDeez got it!<span> We nailed it with this one, it was a success.</span></p>
                    </div>
                    <img src={firstDivImage} alt='restaurant'/>
                </div>

                <div className='HistorySecondDiv lazyLoadHistory'>
                    <img src={secondDivImage} alt='restaurant'/>
                    <div className='SecondDivText'>
                        <h1>It's not all borring<span> meet our hostess</span></h1>
                        <p>- We were thinking, okay we got good food, we got good locations, something is missing... Oh, of course! Beautiful girls! <span>This was a little tricky because of the law back then, but then again, we are McDeez</span></p>
                    </div>
                </div>

                <div className='HistoryThirdDiv lazyLoadHistory'>
                    <div className='ThirdDivText'>
                        <h1>This was how we served people</h1>
                        <p>- In the past, it was very different. You had to obay the rules of service which were set in this restaurant in 1927 by the law. <span>See how classy this is. We bet that we did it right!</span></p>
                    </div>
                    <img src={thirdDivImage} alt='restaurant'/>
                </div>

            </div>
            <div className='HistoryLinkSection lazyLoadHistory'>
                <h1>Let's <span>go and</span> enjoy McDeez <span>services</span></h1>
                <div className='HistoryLinkContent'>
                    <div>
                        <p onClick={() => props.history.push('/foodmaker')}><span>Try our </span>Menu</p>
                    </div>
                    <div>
                        <p onClick={() => props.history.push('/locations')}><span>See our </span>Locations</p>
                    </div>
                    <div>
                        <p onClick={() => props.history.push('/careers')}><span>Go to </span>Careers</p>
                    </div>
                    <div>
                        <p onClick={() => props.history.push('/')}><span>Checkout </span>Home</p>
                    </div>
                </div>
            </div>
            <Footer history={props.history}/>
        </div>
    )

}


export default history;