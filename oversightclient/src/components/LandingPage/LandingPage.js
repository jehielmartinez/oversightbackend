import React, { Component } from 'react';
import neighborhood from '../../assets/houses2.jpg'
import people from '../../assets/people-social.png'
import peopleAdmin from '../../assets/people-admin.png'
import logoGlow from '../../assets/oversight-logo-light-glow.png'
import {Parallax} from 'react-parallax';
import '../LandingPage/LandingPage.css'
import { Row, Col } from 'react-materialize';
import Icon from '@mdi/react'
import {mdiPoll, mdiCommentTextMultiple, mdiCashMultiple, mdiCalendar } from '@mdi/js'
import {appBlueColor, appYellowColor, appRedColor, appGreyColor, appGreenColor} from '../../assets/colors'
import Footer from 'react-materialize/lib/Footer';
import Feature from './subcomponents/Feature/Feature';

class LandingPage extends Component {
    render() {
        const feature1 = {
            title: 'Administración de Vecindarios.',
            text: 'Comunidades siempre informadas y conectadas. Ya no hay necesidad de reuniones donde la mayoria no pueden asistir. Administra un conjunto vecinal inclusivo, transparente y moderno.',
            image: peopleAdmin
        }
        const feature2 = {
            title: 'Una red social privada orientada a la transparencia.',
            text: 'Comunidades siempre informadas y conectadas. Desde buscar un electricista o reservar areas de recreación hasta ver el contrato del ultimo proyecto de tu barrio. Todo desde el mismo lugar.',
            image: people
        }
        
        const caracteristics = {
            caracteristic1: {
                title: 'Opiniones',
                text: 'Cualquier tema es discutible en un ambiente donde todos pueden participar. Maneja las quejas y sugerencias de tus vecinos para crear proyectos a beneficio de todos',
                icon: mdiCommentTextMultiple,
                color: appGreyColor
            },
            caracteristic2: {
                title: 'Encuestas',
                text: 'Puedes realizar encuestas electronicas para conocer las tendencias del pensamiento de tu comunidad. Obten los resultados automaticamente y toma decisiones en poco tiempo',
                icon: mdiPoll,
                color: appRedColor
            },
            caracteristic3: {
                title: 'Reservaciones',
                text: 'Olvidate de administrar los espacios de recreacion, ahora cualquier vecino puede reservar sin necesidad de intermediarios.',
                icon: mdiCalendar,
                color: appBlueColor
            },
            caracteristic4: {
                title: 'Coutas',
                text: 'La administración de las coutas de cada aportante nunca fue tan sencillo. Envia alertas automaticas antes de la fecha de pago para que a nadie se le pase por alto. ',
                icon: mdiCashMultiple,
                color: appGreenColor
            }
        }
        return (
            <div>
                <div>
                    <Parallax
                        blur={{ min: -15, max: 15 }}
                        bgImage={neighborhood}
                        bgImageAlt='neighborhood'
                        strength={500}
                    >
                        <div className='valign-wrapper' style={{ height: '500px' }} >
                            <div className='container center'>
                                <img className='responsive-img logo-jumbo' src={logoGlow} alt='Logo'/>
                                <p className='flow-text banner-text'>Una red vecinal privada orientada a la transparencia y la comunicación</p>
                            </div>
                            
                        </div>
                    </Parallax>
                </div>

                <Feature
                    feature = {feature1}
                />
                
                <div className='caracteristics-container'> 
                    <Row>
                        <Col s={12} m={3}>
                            <div className='center caracteristic'>
                                <Icon path={caracteristics.caracteristic1.icon}
                                    size={3}
                                    color={caracteristics.caracteristic1.color}/>
                                <h4>{caracteristics.caracteristic1.title}</h4>
                                <p className='flow-text caracteristic-text'>{caracteristics.caracteristic1.text}</p>
                            </div>
                        </Col>
                        <Col s={12} m={3}>
                            <div className='center caracteristic'>
                                <Icon path={caracteristics.caracteristic2.icon}
                                    size={3}
                                    color={caracteristics.caracteristic2.color}/>
                                <h4>{caracteristics.caracteristic2.title}</h4>
                                <p className='flow-text caracteristic-text'>{caracteristics.caracteristic2.text}</p>
                            </div>
                        </Col>
                        <Col s={12} m={3}>
                            <div className='center caracteristic'>
                                <Icon path={caracteristics.caracteristic3.icon}
                                    size={3}
                                    color={caracteristics.caracteristic3.color}/>
                                <h4>{caracteristics.caracteristic3.title}</h4>
                                <p className='flow-text caracteristic-text'>{caracteristics.caracteristic3.text}</p>
                            </div>
                        </Col>
                        <Col s={12} m={3}>
                            <div className='center caracteristic'>
                                <Icon path={caracteristics.caracteristic4.icon}
                                    size={3}
                                    color={caracteristics.caracteristic4.color}/>
                                <h4>{caracteristics.caracteristic4.title}</h4>
                                <p className='flow-text caracteristic-text'>{caracteristics.caracteristic4.text}</p>
                            </div>
                        </Col>
                    </Row>
                </div>

                <Feature 
                    feature = {feature2}
                />
                <div className='caracteristics-container'> 
                    <Row>
                        <Col s={12} m={3}>
                            <div className='center caracteristic'>
                                <Icon path={caracteristics.caracteristic1.icon}
                                    size={3}
                                    color={caracteristics.caracteristic1.color}/>
                                <h4>{caracteristics.caracteristic1.title}</h4>
                                <p className='flow-text caracteristic-text'>{caracteristics.caracteristic1.text}</p>
                            </div>
                        </Col>
                        <Col s={12} m={3}>
                            <div className='center caracteristic'>
                                <Icon path={caracteristics.caracteristic2.icon}
                                    size={3}
                                    color={caracteristics.caracteristic2.color}/>
                                <h4>{caracteristics.caracteristic2.title}</h4>
                                <p className='flow-text caracteristic-text'>{caracteristics.caracteristic2.text}</p>
                            </div>
                        </Col>
                        <Col s={12} m={3}>
                            <div className='center caracteristic'>
                                <Icon path={caracteristics.caracteristic3.icon}
                                    size={3}
                                    color={caracteristics.caracteristic3.color}/>
                                <h4>{caracteristics.caracteristic3.title}</h4>
                                <p className='flow-text caracteristic-text'>{caracteristics.caracteristic3.text}</p>
                            </div>
                        </Col>
                        <Col s={12} m={3}>
                            <div className='center caracteristic'>
                                <Icon path={caracteristics.caracteristic4.icon}
                                    size={3}
                                    color={caracteristics.caracteristic4.color}/>
                                <h4>{caracteristics.caracteristic4.title}</h4>
                                <p className='flow-text caracteristic-text'>{caracteristics.caracteristic4.text}</p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Footer
                copyrights='&copy 2015 Copyright Text'
                moreLinks={<a />}
                links={<ul />}
                className="example">
                <h5 className="white-text">
                    Footer Content
                    </h5>
                    <p className="grey-text text-lighten-4">
                    You can use rows and columns here to organize your footer content.
                    </p>
                </Footer>

            </div>
        );
    }
}

export default LandingPage;