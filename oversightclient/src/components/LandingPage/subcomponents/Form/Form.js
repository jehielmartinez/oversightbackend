import React, { Component } from 'react';
import TextInput from 'react-materialize/lib/TextInput';
import { Textarea, MediaBox } from 'react-materialize';

import Col from 'react-materialize/lib/Col';
import '../Form/Form.css'
import Row from 'react-materialize/lib/Row';
import Button from 'react-materialize/lib/Button';
import Icon from '@mdi/react';
import {mdiAccount, mdiHome, mdiMailRu, mdiComment} from '@mdi/js';
import {appGreyColor } from '../../../../assets/colors';
import peopleDraw from '../../../../assets/neighborhood.jpg'

class Form extends Component {

    name = React.createRef();
    address = React.createRef();
    email = React.createRef();
    comment = React.createRef();

    submitContact = (e) => {
        e.preventDefault()

        const contact = {
            name: this.name.current.value,
            address: this.address.current.value,
            email: this.email.current.value,
            comment: this.comment.value
        }

        fetch(`https://${window.location.hostname}/server/client/submit`, {
            method: 'POST',
            body: {contact}
        }).then((res)=>{
            console.log(res)
        }, (err) => {
            console.log(err)
        })

    }

    render() {
        return (
            <form onSubmit={this.submitContact} className='container'>
                    <Row> 
                        <Col s={12} m={6}>
                            <MediaBox className='responsive-img' src={peopleDraw}/>
                        </Col>
                        <Col s={12} m={6}>
                            <div className='center'>
                            <h5>Queremos conocerte</h5>
                            <div className='form-container'>
                                <TextInput ref={this.name} icon={<Icon path={mdiAccount}/>} label='Nombre'/>
                                <TextInput ref={this.address} icon={<Icon path={mdiHome}/>} label='Dirección'/>
                                <TextInput ref={this.email} email validate icon={<Icon path={mdiMailRu}/>} label='Correo Electrónico'/>
                                <Textarea ref={this.comment} icon={<Icon path={mdiComment}/>} label='Comentario'/>
                            </div>
                            <Button 
                                className='right'
                                style={{borderRadius: 15, backgroundColor: appGreyColor}} 
                                type='submit'
                                waves='light'>Enviar</Button>
                            </div>
                        </Col>
                    </Row>
                  
            </form>
        );
    }
};

export default Form;
