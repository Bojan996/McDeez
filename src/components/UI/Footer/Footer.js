import React from 'react';
import './Footer.css';

const footer = () => {
    return (
        <div className='FooterMainContainer'>
            <div className='FooterHeadingDiv'>
                <p>Find us on Social Media</p>
                <div style={{width: '200px', backgroundColor: '#E95035'}}></div>
                <div>
                    <i className="fab fa-facebook-f" style={{fontSize: '25px'}}></i>
                    <i className="fab fa-twitter" style={{marginLeft: '30px', fontSize: '25px'}}></i>
                    <i className="fab fa-linkedin-in" style={{marginLeft: '30px', fontSize: '25px'}}></i>
                    <i className="fab fa-instagram" style={{marginLeft: '30px', fontSize: '25px'}}></i>
                </div>
            </div>
            <div className='FooterContentDiv'>
                <div className='FooterContentDivFirst'>
                    <h1>McDeez</h1>
                    <p>
                        We are an elite junk food restaurant <br/>
                        which provides the best food for our <br/>
                        customers which are very happy to <br/>
                        recommend us. Hope you enjoy McDeez!
                    </p>
                </div>
                <div className='FooterContentDivSecond'>
                    <h1>Services</h1>
                    <p>Premade Menu</p>
                    <p>Builder Menu</p>
                    <p>Careers</p>
                    <p>History</p>
                </div>
                <div className='FooterContentDivThird'>
                    <h1>Social Media</h1>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>Linkedin</p>
                </div>
                <div className='FooterContentDivFourth'>
                    <h1>Contact</h1>
                    <p><i className="fas fa-home" style={{marginRight: '20px'}}></i> New Belgrade, A Block</p>
                    <p><i className="fas fa-envelope" style={{marginRight: '20px'}}></i> mcdeez@gmail.com</p>
                    <p><i className="fas fa-phone" style={{marginRight: '20px'}}></i> 011 2051-321</p>
                    <p><i className="fas fa-fax" style={{marginRight: '20px'}}></i> +381 63 201-3345</p>
                </div>
            </div>
            <div style={{fontWeight: '200', backgroundColor: 'white', padding: '50px 0 15px 0', fontSize: '20px'}}>© 2020 Copyright: <span style={{color: 'rgb(0, 140, 255)'}}>McDeezOfficial™</span></div>
        </div>
    )
}


export default footer;