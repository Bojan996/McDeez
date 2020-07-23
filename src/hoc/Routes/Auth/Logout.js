import React, { useEffect } from 'react';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { connect } from 'react-redux';
import { logout } from '../../../store/actions/auth';

const logoutUser = (props) => {

    useEffect(() => {
        setTimeout(e => {
            props.logout();
            props.history.replace('/')
        }, 1000);
    }, []);

    return <Spinner style={{marginTop: '340px', fontSize: '12px'}}/>
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}


export default connect(null, mapDispatchToProps)(logoutUser);
