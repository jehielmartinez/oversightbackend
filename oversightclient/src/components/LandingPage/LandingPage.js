import React, { Component } from 'react'
import '../LandingPage/LandingPage.css'

import {Parallax} from 'react-parallax'
import { Row, Col } from 'react-materialize'
import Footer from 'react-materialize/lib/Footer'
import {Zoom, Flip} from 'react-reveal'
 
//Images
import neighborhood from '../../assets/houses.jpg'
import peopleSocial from '../../assets/people-social.png'
import peopleAdmin from '../../assets/people-admin.png'
import logoGlow from '../../assets/oversight-logo-light-glow.png'
import screenshot from '../../assets/mobile-screenshot.png'

//Icons and Colors
import {mdiPoll, mdiCommentTextMultiple, mdiCashMultiple, mdiCalendar, mdiFileSearch, mdiShieldHome, mdiHomeGroup, mdiAccountGroup, mdiFacebookBox, mdiGmail } from '@mdi/js'
import {appBlueColor, appRedColor, appGreyColor, appGreenColor, appYellowColor} from '../../assets/colors'

//Subcomponents
import Feature from './subcomponents/Feature/Feature'
import Caracteristic from './subcomponents/Caracteristic/Caracteristic'
import Form from './subcomponents/Form/Form';
import Button from 'react-materialize/lib/Button';
import Icon from '@mdi/react';

class LandingPage extends Component {
    features = React.createRef();
    
    render() {
        const feature1 = {
            title: 'Comunidades inclusivas y modernas',
            text: 'En la actualidad es muy difícil realizar reuniones donde todos estén presentes. Con Oversight puedes comunicarte con la totalidad de las personas que pertenecen a tu comunidad, generar encuestas, publicaciones, manejar las cuotas de pago y organizar eventos desde una sola aplicación.',
            image: peopleAdmin
        }
        const feature2 = {
            title: 'Tu comunidad al alcance de tu mano',
            text: 'Con Oversight puedes visualizar documentos legales, participar activamente en votaciones, discutir temas de interés y comunicarte con la seguridad privada desde tu celular. Realiza publicaciones de tus negocios locales y llega a oidos de todos tus vecinos al mismo tiempo.',
            image: peopleSocial
        }
        const caracteristic1 = {
            title: 'Red Privada',
            text: 'Cualquier tema es discutible en un ambiente donde todos pueden participar. Maneja las sugerencias y observaciones de tus vecinos para crear proyectos a beneficio de todos',
            icon: mdiCommentTextMultiple,
            color: appGreyColor
        }
        const caracteristic2 = {
            title: 'Encuestas',
            text: 'Puedes realizar encuestas electrónicas para conocer las tendencias del pensamiento de las personas qu integran tu comunidad. Obten los resultados automáticamente y toma decisiones de manera rápida y eficaz.',
            icon: mdiPoll,
            color: appRedColor
        }
        const caracteristic3 = {
            title: 'Reservaciones',
            text: 'Olvidate de administrar los espacios de recreacion, ahora cualquier vecino puede reservar sin necesidad de intermediarios.',
            icon: mdiCalendar,
            color: appBlueColor
        }
        const caracteristic4 = {
            title: 'Cuotas',
            text: 'La administración de las coutas de cada aportante nunca fue tan sencillo. Envia alertas automaticas antes de la fecha de pago para que a nadie se le pase por alto. ',
            icon: mdiCashMultiple,
            color: appGreenColor
        }
        const caracteristic5 = {
            title: 'Transparencia',
            text: 'Ten acceso a documentos de carácter público en tu comunidad. Revisa estados de cuenta, contratos, registros, recibos de pago y más.',
            icon: mdiFileSearch,
            color: appBlueColor
        }
        const caracteristic6 = {
            title: 'Seguridad',
            text: 'Comunícate directamente con los guardias de seguridad en caso de problemas, anuncia tus visitantes y ten acceso a todo el registro de entradas y salidas de tu comunidad.',
            icon: mdiShieldHome,
            color: appGreyColor
        }
        const caracteristic7 = {
            title: 'Publicaciones',
            text: '¿Necesitas una herramienta o una escalera? ¿Quieres comenzar un pequeño negocio? Puedes realizar publicaciones para llegar a los oidos de todos los miembros de tu comunidad ',
            icon: mdiHomeGroup,
            color: appRedColor
        }
        const caracteristic8 = {
            title: 'Participación',
            text: 'Participa activamente en las decisiones de tu comunidad, da tu voto en encuestas y publicaciones, opina sobre los temas del momento y se parte de cada actividad',
            icon: mdiAccountGroup,
            color: appYellowColor
        }

        return (
            <div>
                <div>
                    <Parallax
                        blur={{ min: -15, max: 15 }}
                        bgImage={neighborhood}
                        bgImageAlt='neighborhood'
                        strength={700}
                    >
                            <Row className='container' style={{ height: '400px' }}>
                                <Col className='valign-wrapper center banner-info' m={6}>
                                    <div>
                                        <Flip left><img className='responsive-img banner-logo' src={logoGlow} alt='Logo'/></Flip>
                                        <p className='banner-text'>La primera aplicación que mejora la comunicación de los conjuntos vecinales a travez de una red privada orientada a la transparencia y participación.</p>
                                        <Row>
                                            <Button 
                                                waves='light'
                                                style={{borderRadius: 15, backgroundColor: appGreenColor}}
                                                onClick={() => {window.scrollTo(0, this.features.current.offsetTop)}}
                                                >Quiero Saber Más
                                            </Button>
                                        </Row>
                                    </div>
                                </Col>  
                                <Col  m={6}>
                                    <img className='responsive-img banner-screenshot' src={screenshot} alt='screenshot'/>
                                </Col>
                            </Row>
                    </Parallax>
                </div>


                
                <div ref = {this.features}></div>

                
                    <Feature
                    feature = {feature1}  
                    />
                
                <div className='caracteristics-container'> 
                    <Row>
                        <Zoom>
                        <Caracteristic
                            caracteristic = {caracteristic1}
                        />
                        
                        <Caracteristic
                            caracteristic = {caracteristic2}
                        />
                       
                        <Caracteristic
                            caracteristic = {caracteristic3}
                        />
                       
                        <Caracteristic
                            caracteristic = {caracteristic4}
                        />
                        </Zoom>
                    </Row>
                </div>

                <Feature 
                    feature = {feature2}
                />

                <div className='caracteristics-container'> 
                    <Row>
                        <Zoom>
                        <Caracteristic
                            caracteristic = {caracteristic5}
                        />

                        <Caracteristic
                            caracteristic = {caracteristic6}
                        />

                        <Caracteristic
                            caracteristic = {caracteristic7}
                        />

                        <Caracteristic
                            caracteristic = {caracteristic8 }
                        />
                        </Zoom>
                    </Row>
                </div>
                <Form/>
                <Footer
                    copyrights={<p> Copyright &copy; 2019 Oversight. Todos los Derechos Reservados</p>}
                    links={<ul>
                        <li className='valign-wrapper'><Icon path={mdiFacebookBox} size={2} color={'white'}/><a className='social-link' target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/oversighthn'>@oversighthn</a></li>
                        <li className='valign-wrapper'><Icon path={mdiGmail} size={2} color={'white'}/><a className='social-link' rel='noopener noreferrer' href='mailto:contacto@oversight.hn'>contacto@oversight.hn</a></li>
                   </ul>}
                    className="footer">
                    <h5 className="white-text">Oversight</h5>
                        <p className="grey-text text-lighten-4">
                        Una red vecinal privada orientada a la transparencia y la comunicación  
                        </p>
                </Footer>

            </div>
        );
    }
}

export default LandingPage;