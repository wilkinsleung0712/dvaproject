import React from 'react';
import UserList from './components/UserList';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

const Users = ({dispatch, list, total, loading, page}) => {
    
    function deleteHandler(id) {
        dispatch({
            type: 'users/remove',
            payload: id
        })
    }

    function pageChangeHandler(page) {
        dispatch(routerRedux.push({
            pathname: '/users',
            query: {page}
        }))
    }
    return (
        <div>
            <h1> Users Page </h1>
            <UserList users={list} total={total} loading={loading} onChange={pageChangeHandler} onDelete={deleteHandler} page={page}/>
        </div>
    )
    
};


export default connect((state) => {
    const {list, total, page} = state.users;
    return {
        list,
        total,
        page,
        loading: state.loading.models.users,
    }
})(Users);