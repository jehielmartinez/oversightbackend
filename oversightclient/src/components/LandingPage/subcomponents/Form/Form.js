import React, { Component } from 'react';
import { Textarea, MediaBox, TextInput } from 'react-materialize';
import axios from 'axios';
import Swal from 'sweetalert2'
import Col from 'react-materialize/lib/Col';
import '../Form/Form.css'
import Row from 'react-materialize/lib/Row';
import Button from 'react-materialize/lib/Button';
import Icon from '@mdi/react';
import {mdiAccount, mdiMailRu, mdiComment} from '@mdi/js';
import {appGreyColor, appRedColor, appGreenColor } from '../../../../assets/colors';
import peopleLike from '../../../../assets/community-park.jpg'

class Form extends Component {

    state = {
            name: '',
            email: '',
            comment: '',
    }

    submitContact = (e) => {
        e.preventDefault()

        const {name, email, comment} = this.state

        if (email  === ''){
            Swal.fire({
                type: 'error',
                title: 'Ingrese correo electrónico',
                showConfirmButton: false,
                timer: 2000
            })
        } else {
           
            const contact = {
                name,
                email,
                comment
            }

        axios.post(`https://${window.location.hostname}/server/client/submit`, contact)
        .then((res)=>{
            console.log(res)
            Swal.fire({
                type: 'success',
                title: 'Contacto Enviado',
                showConfirmButton: false,
                timer: 2000
            })
        }, (err) => {
            Swal.fire({
                type: 'error',
                title: 'Error del Servidor',
                showConfirmButton: false,
                timer: 2000
            })
        })
    }

    }

    render() {
        return (
            <form onSubmit={this.submitContact} className='container'>
                    <Row> 
                        <Col s={12} m={6}>
                            <MediaBox className='responsive-img img' src={peopleLike}/>
                        </Col>
                        <Col s={12} m={6}>
                            <div className='center'>
                            <h5>¿Quieres Oversight en tu comunidad?</h5>
                            <div className='form-container'>
                                <TextInput onChange={e => this.setState({name : e.target.value})} icon={<Icon color={appGreyColor} path={mdiAccount}/>} label='Nombre y Apellido'/>
                                <TextInput onChange={e => this.setState({email : e.target.value})} email validate icon={<Icon color={appRedColor} path={mdiMailRu}/>} label='Correo Electrónico'/>
                                <Textarea onChange={e => this.setState({comment : e.target.value})} icon={<Icon color={appGreenColor} path={mdiComment}/>} label='Comentario'/>
                            </div>
                            <Button 
                                className='right'
                                style={{borderRadius: 15, backgroundColor: appRedColor}} 
                                type='submit'
                                waves='light'>Contactarme
                            </Button>
                            </div>
                        </Col>
                    </Row>    
            </form>
        );
    }
};

export default Form;
