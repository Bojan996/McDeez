import React from 'react';
import './MenuDrawer.css';


const menuDrawer = (props) => {
    return (
        <div className='MDContainer' style={{
            transform: props.show ? 'translateX(0)' : 'translateX(160vh)',
            opacity: props.show ? '1' : '0'
        }}>
            <div className='MDPictureSide'>
                <img src='https://media.bizj.us/view/img/10100451/burger*750xx2020-1142-0-256.jpg' alt='the burger'/>
                <h2>The Kings Burger</h2>
                <p>- A susam based bread crust with lot's of meat and cheese in it.<br/> <br/>- Salad, Bacon, Cheese are the main ingrediants in this burger. <br/> <br/>-The creamy stuff are ketcup, mayo and mustard!</p>
            </div>
            <div className='MDNutritionSide'>
                <img src='https://lightlife.com/wp-content/uploads/2019/05/Lightlife-Burger-US-Retail-NFP-FINAL.jpg' alt='the nutrition value'/>
                <button>Put in Order!</button>
            </div>
        </div>
    )
}



export default menuDrawer;