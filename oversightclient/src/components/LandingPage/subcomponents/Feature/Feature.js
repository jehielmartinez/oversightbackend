import React from 'react';
import { Row, Col, MediaBox } from 'react-materialize';
import './Feature.css'

const Feature = (props) => {
    return (
        <div className='container'>
            <Row>
                <Col s={12} m={6}>
                    <div className='feature-container'>
                        <h3 className='feature-title'>{props.feature.title}</h3>
                        <p className='feature-text flow-text'>{props.feature.text}</p>
                        <button className='feature-callToAction waves-effect btn right'>Saber mas</button>
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