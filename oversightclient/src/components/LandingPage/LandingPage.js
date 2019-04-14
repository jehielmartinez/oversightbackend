import React, { Component } from 'react'
import '../LandingPage/LandingPage.css'

import {Parallax} from 'react-parallax'
import { Row } from 'react-materialize'
import Footer from 'react-materialize/lib/Footer'


//Images
import neighborhood from '../../assets/houses2.jpg'
import peopleSocial from '../../assets/people-social.png'
import peopleAdmin from '../../assets/people-admin.png'
import logoGlow from '../../assets/oversight-logo-light-glow.png'

//Icons and Colors
import {mdiPoll, mdiCommentTextMultiple, mdiCashMultiple, mdiCalendar } from '@mdi/js'
import {appBlueColor, appRedColor, appGreyColor, appGreenColor} from '../../assets/colors'

//Subcomponents
import Feature from './subcomponents/Feature/Feature'
import Caracteristic from './subcomponents/Caracteristic/Caracteristic'
import Header from './subcomponents/Header/Header'

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
            image: peopleSocial
        }
        const caracteristic1 = {
            title: 'Opiniones',
            text: 'Cualquier tema es discutible en un ambiente donde todos pueden participar. Maneja las quejas y sugerencias de tus vecinos para crear proyectos a beneficio de todos',
            icon: mdiCommentTextMultiple,
            color: appGreyColor
        }
        const caracteristic2 = {
            title: 'Encuestas',
            text: 'Puedes realizar encuestas electronicas para conocer las tendencias del pensamiento de tu comunidad. Obten los resultados automaticamente y toma decisiones en poco tiempo',
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

        return (
            <div>
                <Header/>
                <div>
                    <Parallax
                        blur={{ min: -15, max: 15 }}
                        bgImage={neighborhood}
                        bgImageAlt='neighborhood'
                        strength={700}
                    >
                        <div className='valign-wrapper' style={{ height: '500px' }} >
                            <div className='container center'>
                                <img className='responsive-img banner-logo' src={logoGlow} alt='Logo'/>
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

                <Footer
                    copyrights={<div> Copyright &copy; 2019 Ovrsight. Todos los Derechos Reservados</div>}
                    links={<ul />}
                    className="footer">
                    <h5 className="white-text">
                        Ovrsight Social
                        </h5>
                        <p className="grey-text text-lighten-4">
                        Una red vecinal privada orientada a la transparencia y la comunicación  
                        </p>
                </Footer>

            </div>
        );
    }
}

export default LandingPage;