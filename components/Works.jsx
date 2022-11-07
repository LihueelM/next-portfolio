import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Proyectos from '../public/works'


const Works = () => {
  return (
    <div id='works'>
      <Container>
        <h2 className='title'>Mis proyectos</h2>
        <Row>
          {
            Proyectos.map(e => {
              return(
                <Col className='md={2} sm={6} xs={12} d-flex flex-column col-works' key={e.name}>
                  <h2>{e.name}</h2>
                  <Link href={e.link} alt='proyecto' target='_blank'>                    
                    <Image src={e.image} alt={e.name} width={380} height={240} className='img-works '/>                    
                  </Link>         
                  <h5>{e.description}</h5>         
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div>
  )
}

export default Works