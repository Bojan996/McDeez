import React, { useState, useEffect } from 'react';
import './SingleLocation.css';
import axios from 'axios';
import Loader from '../UI/Spinner/Spinner';
import Footer from '../UI/Footer/Footer';

import TextField from '@material-ui/core/TextField';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { withSnackbar } from 'notistack';
import { restaurantImages } from '../../helpers/switchStatements';
import { restaurantLocations } from '../../helpers/switchStatements';


const singleLocation = (props) => {

    const [loading, setLoading] = useState(false);
    const [comments, setComments] = useState(null);
    const [inputInfo, setInputInfo] = useState({
        name: '',
        surname: '',
        comment: ''
    });

    useEffect(() => {
        axios.get(`https://mcdeez-b6b14.firebaseio.com/restaruantComments/${props.match.params.id}.json`)
        .then(res => {
            setComments(res.data);
        });
    }, []);

    const inputHandler = (event, type) => {
        const updatedInputInfo = {...inputInfo};
        updatedInputInfo[type] = event.target.value;
        setInputInfo(updatedInputInfo);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        setLoading(true);
        const restaurantName = props.match.params.id,
            date = new Date(),
            month = date.getUTCMonth() + 1,
            day = date.getUTCDate(),
            year = date.getUTCFullYear(),
            currentDate = year + "/" + month + "/" + day;
        
        const fullComment = {
            name: inputInfo.name,
            surname: inputInfo.surname,
            date: currentDate,
            comment: inputInfo.comment
        }

        axios.post(`https://mcdeez-b6b14.firebaseio.com/restaruantComments/${restaurantName}.json`, fullComment);
        
        setTimeout(e => {
            setLoading(false);
            props.enqueueSnackbar('Your comment was added!',  {variant: 'success'} );
            setTimeout(e => {
                window.location.reload();
            }, 2000);
        }, 700);

    }

    const image = restaurantImages(props.match.params.id);
    const location = restaurantLocations(props.match.params.id);

    let domComments = null;

    if(comments !== null){
        domComments = Object.keys(comments).map((e, index) => {
            return (
                <div className='SLDataBaseComment' key={index}>
                    <h1><span style={{display: 'flex', alignItems: 'center'}}><AccountCircleIcon fontSize='large' className='SLUserIcon'/>{comments[e].name} {comments[e].surname}</span> <span style={{fontSize: '18px', color: 'rgb(99, 99, 99)'}}>{comments[e].date}</span></h1>
                    <p>{comments[e].comment}</p>
                </div>
            )
        })
    }

    return (
        <div>
            <div className='SLContainer'>
                <div className='SLPictureMap'>
                    <div className='SLHeadingPicture'>
                        <h1><span className='SLHeadingPictureMcDeezSpan'>McDeez</span> <span className='SLHeadingPictureInSpan'>in</span> {props.match.params.id}</h1>
                        {image}
                    </div>
                    <div className='SLMap'>
                        <h1>Location</h1>
                        {location}
                    </div>
                </div>
                <div className='SLComments'>
                    <h1 className='SLCommentsMainHeader'>Comments</h1>
                    <div className='SLCommentsContent'>
                        <div className='SLCommentsSection'>
                            {domComments}
                        </div>
                        <div className='SLFormSection'>
                            <h1>Add Comment</h1>
                            <form className='SLForm'>
                                <div className='SLFormNameSurname'>
                                    <TextField id="outlined-basic" required={true}  label="Name" variant="outlined" className='CommentFormNameSurname' onChange={(event) => inputHandler(event, 'name')}/>
                                    <TextField id="outlined-basic" required={true}  label="Surname" variant="outlined" className='CommentFormNameSurname' onChange={(event) => inputHandler(event, 'surname')}/>
                                </div>
                                <TextField id="outlined-basic" label="Comment..." variant="outlined" multiline={true} rows='5' onChange={(event) => inputHandler(event, 'comment')}/>
                                <button className='CommentSubmitButton' onClick={formSubmitHandler}>{loading ? <Loader style={{fontSize: '2px', color: '#FFCD39', margin: '0 auto', borderColor: 'white', borderLeftColor: 'rgb(0, 140, 255)', borderWidth: '4px'}}/> : 'Submit'}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer history={props.history}/>
        </div>
    )

}


export default withSnackbar(singleLocation);