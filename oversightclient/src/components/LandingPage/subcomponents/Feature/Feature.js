import React from 'react';
import { Row, Col, MediaBox } from 'react-materialize';
import './Feature.css'

const Feature = (props) => {
    return (
        <div className='container'>
            <Row>
                <Col s={12} m={6}>
                    <div className='feature-container'>
                        <h5 className='feature-title'>{props.feature.title}</h5>
                        <p className='feature-text'>{props.feature.text}</p>
                    </div>
                </Col>
                <Col s={12} m={6}>
                    <div className='feature-image valign-wrapper'>
                        <MediaBox className='responsive-img' src={props.feature.image} caption='Red Social'/>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Feature;