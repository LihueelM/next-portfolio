import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from '../public/assets/bookstore.png'
import img2 from '../public/assets/critical-games.png'
import img3 from '../public/assets/drinks.png'

const Works = () => {
  return (
    <div id='works'>
      <Container>
        <h2 className='title'>Mis proyectos</h2>
        <Row> 
          <Col className='md={2} sm={6} xs={12} d-flex flex-column col-works'>
            <h2>BookStrap</h2>
            <Link href="https://github.com/LihueelM/BookStore-react" alt='proyecto' target='_blank'>                    
              <Image src={img1} alt='bookstore' width={380} height={240} className='img-works '/>                    
            </Link>         
            <h5>Proyecto E-commerce realizado con React.js y Firebase</h5>         
          </Col> 

          <Col className='md={2} sm={6} xs={12} d-flex flex-column col-works'>
            <h2>Critical Games</h2>
            <Link href="https://github.com/LihueelM/CoderHouse-ProgramacionWeb" alt='proyecto' target='_blank'>                    
              <Image src={img2} alt='critical-games' width={380} height={240} className='img-works '/>                    
            </Link>         
            <h5>Proyecto realizado con HTML5, CSS3 y Bootstrap</h5>         
          </Col> 

          <Col className='md={2} sm={6} xs={12} d-flex flex-column col-works'>
            <h2>Orwell Drinks</h2>
            <Link href="https://github.com/LihueelM/Ecommerce---Javascript-Vanilla" alt='proyecto' target='_blank'>                    
              <Image src={img3} alt='drinks orwell' width={380} height={240} className='img-works '/>                    
            </Link>         
            <h5>Proyecto E-commerce realizado con HTML5, CSS3 y JavaScript ES6</h5>         
          </Col>
         
        </Row>
      </Container>
    </div>
  )
}

export default Works
