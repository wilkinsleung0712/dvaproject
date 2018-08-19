import React from 'react';
import UserList from '../components/UserList';
import { connect } from 'dva';

const Users = ({dispatch, list, total}) => {
const Users = ({dispatch, list, total, loading}) => {
    
    return (
        <div>
            <h1> Users Page </h1>
            <UserList users={list}/>
            <UserList users={list} total={total} loading={loading}/>
        </div>
    )
    
};


export default connect((state) => {
    const {list, total} = state.users;
    return {
        list,
        total
        total,
        loading: state.loading.models.users,
    }
})(Users);