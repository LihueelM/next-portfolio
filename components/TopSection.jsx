import React from 'react'
import developer from '../public/assets/img-one.png'
import Image from 'next/image'
import {Container , Row, Col ,Button} from 'react-bootstrap'
import Link from 'next/link'



const TopSection = () => {
  return (
    <div id='home' >
        <div className='background'></div>
          <Container className='container-main'>
            <Row className='container-top'>
              <Col md={8} xs={12} className='card-top'>                
                <h1>Hola! Mi nombre es Lihueel Mansilla</h1>
                <h2>Front-end developer</h2>
                <p className='parrafo'>Soy un profesional apasionado por el desarrollo y la programacion de aplicaciones. Resido actualmente en Argentina y estoy abierto a trabajos tanto freelance como en empresas</p>
                <Link href='https://github.com/LihueelM' target="_blank" alt='button'><Button variant="outline-warning">Github</Button></Link>                
              </Col>
              <Col md={4} xs={12} className='img-one' >
                <Image src={developer} alt='developer' width={360} className='img-fluid'/>
              </Col>
            </Row>                         
          </Container>        
    </div>
  )
}

export default TopSection