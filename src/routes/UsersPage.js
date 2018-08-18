import React from 'react';
import UserList from '../components/UserList';
import { connect } from 'dva';

const Users = (dispatch, users) => {
    
    return (
        <div>
            <h1> Users Page </h1>
            <UserList users={users}/>
        </div>
    )
    
};


export default connect(({users}) => ({
    users
}))(Users);