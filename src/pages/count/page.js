import CounterView from './components/CounterView';
import React from 'react';
import {connect} from 'dva';

const Counter = ({dispatch, counter}) => {

    function handleOnPlus() {
        dispatch({
            type: 'counter/plus',
        })
    }

    function handleOnMinus() {
        dispatch({
            type: 'counter/minus'
        })
    }

    return (
        <CounterView counter={counter} onPlus={handleOnPlus} onMinus={handleOnMinus}/>
    )
}

export default connect(({counter}) => ({
    counter
}))(Counter);