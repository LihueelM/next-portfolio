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
                <h1 className='titulo'>Hola! Mi nombre es Lihueel Mansilla</h1>
                <h2 className='subtitulo'>Front-end developer</h2>
                <h4>Actualmente estudiante de la carrera <span className='resaltado'>Licenciatura en sistemas</span>  en la universidad nacional general sarmiento.
                  De forma complementaria con el objetivo de poder insertarme laboralmente curso paralelamente la carrera <span className='resaltado'>Full-stack</span> en CoderHouse</h4>
                <Link href='https://github.com/LihueelM' target="_blank" alt='button'><Button variant="outline-warning">Github</Button></Link>                
              </Col>
              <Col md={4} xs={12} className='img-one' >
                <Image src={developer} alt='developer' width={300} className='img-fluid'/>
              </Col>
            </Row>                         
          </Container>        
    </div>
  )
}

export default TopSection
