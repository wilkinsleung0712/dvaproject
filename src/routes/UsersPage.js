import React from 'react';
import UserList from '../components/UserList';
import { connect } from 'dva';

const Users = ({dispatch, list, total}) => {
    
    return (
        <div>
            <h1> Users Page </h1>
            <UserList users={list}/>
        </div>
    )
    
};


export default connect((state) => {
    const {list, total} = state.users;
    return {
        list,
        total
    }
})(Users);