import React from 'react';
import Icon from '@mdi/react'
import { Col } from 'react-materialize';
import './Caracteristic.css'

const Caracteristic = (props) => {
    return (
        <Col s={12} m={3}>
        <div className='center caracteristic'>
            <Icon path={props.caracteristic.icon}
                size={3}
                color={props.caracteristic.color}/>
            <h4>{props.caracteristic.title}</h4>
            <p className='flow-text caracteristic-text'>{props.caracteristic.text}</p>
        </div>
    </Col>
    );
};

export default Caracteristic;