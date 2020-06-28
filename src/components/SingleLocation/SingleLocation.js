import React, { Component } from 'react';
import './SingleLocation.css';
import axios from 'axios';
import Loader from '../UI/Spinner/Spinner';
import Footer from '../UI/Footer/Footer';

import TextField from '@material-ui/core/TextField';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { withSnackbar } from 'notistack';
import { restaurantImages } from '../../helpers/switchStatements';
import { restaurantLocations } from '../../helpers/switchStatements';


class SingleLocation extends Component {

    state = {
        loading: false,
        inputInfo: {
            name: '',
            surname: '',
            comment: ''
        },
        comments: null
    }

    componentDidMount(){
        axios.get(`https://mcdeez-b6b14.firebaseio.com/restaruantComments/${this.props.match.params.id}.json`)
        .then(res => {
            this.setState({comments: res.data});
        })
    }

    inputHandler = (event, type) => {
        const updatedInputInfo = {...this.state.inputInfo};
        updatedInputInfo[type] = event.target.value;
        this.setState({inputInfo: updatedInputInfo});
    }

    formSubmitHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const restaurantName = this.props.match.params.id,
            date = new Date(),
            month = date.getUTCMonth() + 1,
            day = date.getUTCDate(),
            year = date.getUTCFullYear(),
            currentDate = year + "/" + month + "/" + day;
        
        const fullComment = {
            name: this.state.inputInfo.name,
            surname: this.state.inputInfo.surname,
            date: currentDate,
            comment: this.state.inputInfo.comment
        }

        axios.post(`https://mcdeez-b6b14.firebaseio.com/restaruantComments/${restaurantName}.json`, fullComment);
        
        setTimeout(e => {
            this.setState({loading: false});
            this.props.enqueueSnackbar('Your comment was added!',  {variant: 'success'} );
            setTimeout(e => {
                window.location.reload();
            }, 2000);
        }, 700);

    }

    render(){

        const image = restaurantImages(this.props.match.params.id);
        const location = restaurantLocations(this.props.match.params.id);

        let comments = null;

        if(this.state.comments !== null){
            comments = Object.keys(this.state.comments).map((e, index) => {
                return (
                    <div className='SLDataBaseComment' key={index}>
                        <h1><span style={{display: 'flex', alignItems: 'center'}}><AccountCircleIcon fontSize='large' className='SLUserIcon'/>{this.state.comments[e].name} {this.state.comments[e].surname}</span> <span style={{fontSize: '18px', color: 'rgb(99, 99, 99)'}}>{this.state.comments[e].date}</span></h1>
                        <p>{this.state.comments[e].comment}</p>
                    </div>
                )
            })
        }

        return (
            <div>
                <div className='SLContainer'>
                    <div className='SLPictureMap'>
                        <div className='SLHeadingPicture'>
                            <h1><span className='SLHeadingPictureMcDeezSpan'>McDeez</span> <span className='SLHeadingPictureInSpan'>in</span> {this.props.match.params.id}</h1>
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
                                {comments}
                            </div>
                            <div className='SLFormSection'>
                                <h1>Add Comment</h1>
                                <form className='SLForm'>
                                    <div className='SLFormNameSurname'>
                                        <TextField id="outlined-basic" required={true}  label="Name" variant="outlined" className='CommentFormNameSurname' onChange={(event) => this.inputHandler(event, 'name')}/>
                                        <TextField id="outlined-basic" required={true}  label="Surname" variant="outlined" className='CommentFormNameSurname' onChange={(event) => this.inputHandler(event, 'surname')}/>
                                    </div>
                                    <TextField id="outlined-basic" label="Comment..." variant="outlined" multiline={true} rows='5' onChange={(event) => this.inputHandler(event, 'comment')}/>
                                    <button className='CommentSubmitButton' onClick={this.formSubmitHandler}>{this.state.loading ? <Loader style={{fontSize: '2px', color: '#FFCD39', margin: '0 auto', borderColor: 'white', borderLeftColor: 'rgb(0, 140, 255)', borderWidth: '4px'}}/> : 'Submit'}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer history={this.props.history}/>
            </div>
        )

    }

}


export default withSnackbar(SingleLocation);