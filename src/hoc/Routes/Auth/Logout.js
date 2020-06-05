import React, { Component } from 'react';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { connect } from 'react-redux';
import { logout } from '../../../store/actions/auth';

class Logout extends Component {

    componentDidMount(){
        setTimeout(e => {
            this.props.logout();
            this.props.history.replace('/')
        }, 1000);
    }

    render(){
        return <Spinner style={{marginTop: '340px', fontSize: '12px'}}/>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}


export default connect(null, mapDispatchToProps)(Logout);
