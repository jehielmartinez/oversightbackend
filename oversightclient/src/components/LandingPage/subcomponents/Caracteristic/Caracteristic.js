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
            <h5>{props.caracteristic.title}</h5>
            <p className='caracteristic-text'>{props.caracteristic.text}</p>
        </div>
    </Col>
    );
};

export default Caracteristic;