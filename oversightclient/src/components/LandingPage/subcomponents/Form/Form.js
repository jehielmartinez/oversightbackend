import React, { Component } from 'react';
import { Textarea, MediaBox, TextInput } from 'react-materialize';
import axios from 'axios';

import Col from 'react-materialize/lib/Col';
import '../Form/Form.css'
import Row from 'react-materialize/lib/Row';
import Button from 'react-materialize/lib/Button';
import Icon from '@mdi/react';
import {mdiAccount, mdiHome, mdiMailRu, mdiComment} from '@mdi/js';
import {appGreyColor } from '../../../../assets/colors';
import peopleDraw from '../../../../assets/neighborhood.jpg'

class Form extends Component {

    state = {
            name: '',
            address: '',
            email: '',
            comment: '',
    }

    submitContact = (e) => {
        e.preventDefault()

        const contact = {
            name: this.state.name,
            address: this.state.address,
            email: this.state.email,
            comment: this.state.comment,
        }

        console.log(contact)

        
        axios.post(`http://${window.location.hostname}/server/client/submit`, contact)
        .then((res)=>{
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
                                <TextInput onChange={e => this.setState({name : e.target.value})} icon={<Icon path={mdiAccount}/>} label='Nombre'/>
                                <TextInput onChange={e => this.setState({address : e.target.value})} icon={<Icon path={mdiHome}/>} label='Direccion'/>
                                <TextInput onChange={e => this.setState({email : e.target.value})} email validate icon={<Icon path={mdiMailRu}/>} label='Correo Electrónico'/>
                                <Textarea onChange={e => this.setState({comment : e.target.value})} icon={<Icon path={mdiComment}/>} label='Comentario'/>
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
