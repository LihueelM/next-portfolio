import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import gear from '../public/assets/gear.png'
import laptop from '../public/assets/laptop.png'
import thinking from '../public/assets/thinking.png'
import talking from '../public/assets/talking.png'


const MiddleSeccion = () => {
  return (
    <div id='softSkills'>
        <div className='background-middle'>
            <Container >
                <h2 className='title'>Actitudes</h2>
                <Row className='container-middle'>
                    <Col md={3} xs={12} sm={6}>                        
                        <Image src={laptop} alt='Programming' width={250} className='img-fluid'/>
                        <h3>Diseño responsivo</h3>
                        <p className='parrafo'>Focalizado en entregar una experiencia amena tanto en dispositivos móviles como desktop</p>
                    </Col>
                    <Col md={3} xs={12} sm={6}>
                        <Image src={thinking} alt='Resolve Problems' width={250} className='img-fluid'/>
                        <h3>Resolucion de problemas</h3>
                        <p className='parrafo'>Determinacion al resolver problemas e idear nuevas formas de realizar un trabajo de forma optima.</p>
                    </Col>
                    <Col md={3} xs={12} sm={6}>
                        <Image src={gear} alt='Great Ideas' width={250} className='img-fluid'/>
                        <h3>Grandes ideas</h3>
                        <p className='parrafo'>Gran creatividad al desarrollar trabajos, tanto en el apartado visual como en el programatico.</p>
                    </Col>
                    <Col md={3} xs={12} sm={6}>
                        <Image src={talking} alt='Great Ideas' width={250} className='img-fluid'/>
                        <h3>Buena comunicacion</h3>
                        <p className='parrafo'>Buena comunicacion con clientes y compañeros, generando un clima laboral positivo.</p>
                    </Col>
                </Row>
            </Container>
        </div>        
    </div>
  )
}

export default MiddleSeccion