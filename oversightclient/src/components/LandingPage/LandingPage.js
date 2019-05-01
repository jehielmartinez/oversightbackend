import React, { Component } from 'react'
import '../LandingPage/LandingPage.css'

import {Parallax} from 'react-parallax'
import { Row } from 'react-materialize'
import Footer from 'react-materialize/lib/Footer'

//Images
import neighborhood from '../../assets/houses.jpg'
import peopleSocial from '../../assets/people-social.png'
import peopleAdmin from '../../assets/people-admin.png'
import logoGlow from '../../assets/oversight-logo-light-glow.png'

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
            title: 'Comunidades Inclusivas y Modernas',
            text: 'Vecinos siempre informados y conectados. En este tiempo ya no hay necesidad de reuniones donde no todos pueden asistir. Con Oversight puedes generar encuestas y publicaciones, manejar las cuotas de pago y organizar eventos desde una sola aplicacion. La asistencia siempre será del 100%',
            image: peopleAdmin
        }
        const feature2 = {
            title: 'Tu comunidad al alcance de tu mano.',
            text: 'Con Oversight puedes visualizar documentos legales, participar activamente en votaciones, discutir temas de interés y comunicarte con la seguridad privada desde tu celular. Realiza publicaciones de tus negocios locales y llega a oidos de todos tus vecinos al mismo tiempo.',
            image: peopleSocial
        }
        const caracteristic1 = {
            title: 'Red Privada',
            text: 'Cualquier tema es discutible en un ambiente donde todos pueden participar. Maneja las quejas y sugerencias de tus vecinos para crear proyectos a beneficio de todos',
            icon: mdiCommentTextMultiple,
            color: appGreyColor
        }
        const caracteristic2 = {
            title: 'Encuestas',
            text: 'Puedes realizar encuestas electronicas para conocer las tendencias del pensamiento de tu comunidad. Obten los resultados automaticamente y toma decisiones en poco tiempo.',
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
            title: 'Coutas',
            text: 'La administración de las coutas de cada aportante nunca fue tan sencillo. Envia alertas automaticas antes de la fecha de pago para que a nadie se le pase por alto. ',
            icon: mdiCashMultiple,
            color: appGreenColor
        }
        const caracteristic5 = {
            title: 'Transparencia',
            text: 'Ten acceso a documentos de caracter publico en tu comunidad. Revisa estados de cuenta, contratos, registros y demas',
            icon: mdiFileSearch,
            color: appBlueColor
        }
        const caracteristic6 = {
            title: 'Seguridad',
            text: 'Comunicate directamente con los guardias de seguridad en caso de problemas, anuncia tus visitantes y ten acceso a todo el registro de entradas y salidas de la colonia. ',
            icon: mdiShieldHome,
            color: appRedColor
        }
        const caracteristic7 = {
            title: 'Publicaciones',
            text: 'Necesitas una herramienta o una escalera? Quieres comenzar un pequeño negocio? Puedes realizar publicaciones para llegar a todos los miembros de tu comunidad ',
            icon: mdiHomeGroup,
            color: appGreyColor
        }
        const caracteristic8 = {
            title: 'Participacion',
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
                        <div className='valign-wrapper' style={{ height: '400px' }} >
                            <div className='container center'>
                                <img className='responsive-img banner-logo' src={logoGlow} alt='Logo'/>
                                <p className='flow-text banner-text'>Una red vecinal privada orientada a la transparencia y la comunicación</p>
                                <Button 
                                    waves='light' 
                                    style={{borderRadius: 15, backgroundColor: appGreenColor}}
                                    onClick={() => {window.scrollTo(0, this.features.current.offsetTop)}}
                                    >Quiero Saber Más
                                </Button>
                            </div>  
                        </div>
                    </Parallax>
                </div>
                <div ref = {this.features}></div>

                <Feature
                    feature = {feature1}  
                />
                
                <div className='caracteristics-container'> 
                    <Row>
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
                    </Row>
                </div>

                <Feature 
                    feature = {feature2}
                />

                <div className='caracteristics-container'> 
                    <Row>
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
                    </Row>
                </div>
                <Form/>
                <Footer
                    copyrights={<p> Copyright &copy; 2019 Oversight. Todos los Derechos Reservados</p>}
                    links={<ul>
                        <li className='valign-wrapper'><Icon path={mdiFacebookBox} size={2} color={'white'}/><a className='social-link' target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/oversightapp'>@oversightapp</a></li>
                        <li className='valign-wrapper'><Icon path={mdiGmail} size={2} color={'white'}/><a className='social-link' rel='noopener noreferrer' href='mailto:contacto@ovrsight.com'>contacto@ovrsight.com</a></li>
                   </ul>}
                    className="footer">
                    <h5 className="white-text">Oversight Social</h5>
                        <p className="grey-text text-lighten-4">
                        Una red vecinal privada orientada a la transparencia y la comunicación  
                        </p>
                </Footer>

            </div>
        );
    }
}

export default LandingPage;