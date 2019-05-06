import React from 'react';
import { Row, Col, MediaBox } from 'react-materialize';
import './Feature.css';

const Feature = (props) => {
    return (
        <div className='container'>
            <Row>
                <Col s={12} m={6} className='valign-wrapper'>
                    <div className='feature-container'>
                        <h5 className='feature-title'>{props.feature.title}</h5>
                        <h6 className='feature-text'>{props.feature.text[0]}</h6>
                        <h6 className='feature-text'>{props.feature.text[1]}</h6>
                        <h6 className='feature-text'>{props.feature.text[2]}</h6>
                    </div>
                </Col>
                <Col s={12} m={6} className='valign-wrapper'>
                    <div className='feature-image'>
                        <MediaBox className='responsive-img img' src={props.feature.image} caption='Red Social'/>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Feature;