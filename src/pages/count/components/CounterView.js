import { Button } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

const CounterView = (({counter, onPlus, onMinus}) => {
    
    return (
        <div>
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <Button shape="circle" type="primary" icon="plus-circle" onClick={onPlus}/>
            <Button shape="circle" type="danger" icon="minus-circle" onClick={onMinus}/>
        </div>
    )
})

CounterView.propTypes = {
    onPlus: PropTypes.func.isRequired,
    onMinus: PropTypes.func.isRequired
};

export default CounterView;