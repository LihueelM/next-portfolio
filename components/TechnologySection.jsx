import React from 'react';
import bootstrap from '../public/assets/bootstrap.png'
import css from '../public/assets/css.png'
import firebase from '../public/assets/firebase.png'
import html from '../public/assets/html.png'
import next from '../public/assets/next.png'
import node from '../public/assets/node.png'
import react from '../public/assets/react.png'



import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';

const TechnologySection = () => {
  return (
   <div id='skills'>
      <div className='background-technology'>
        <Container>
          <h2 className='title'>Tecnologias que utilizo</h2>
            <Row className='row-container-technology'>
              <Col className='icons-container'  md={3} xs={6} sm={4} >
                <Image src={html} alt='skill' width={180} height={180} />
                <h3>HTML5</h3>
              </Col >
              <Col className='icons-container' md={3} xs={6} sm={4}>
                <Image src={css} alt='skill' width={180} height={180} />
                <h3>CSS3</h3>
              </Col >
              <Col className='icons-container' md={3} xs={6} sm={4}> 
                <Image src={react} alt='skill' width={180} height={180} />
                <h3>React.Js</h3>
              </Col >      
            </Row>
            <Row className='row-container-technology'>
              <Col className='icons-container' md={3} xs={6} sm={4}>
                <Image src={bootstrap} alt='skill' width={180} height={180} />
                <h3>Bootstrap</h3>
              </Col >
              <Col className='icons-container' md={3} xs={6} sm={4}> 
                <Image src={next} alt='skill' width={180} height={180} />
                <h3>Next.JS</h3> 
              </Col>
              <Col className='icons-container' md={3} xs={6} sm={4}> 
                <Image src={firebase} alt='skill' width={180} height={180} />
                <h3>Firebase</h3>
              </Col >
              <Col className='icons-container' md={3} xs={6} sm={4}> 
                <Image src={node} alt='skill' width={180} height={180} />
                <h3>Node.js</h3>
              </Col >
            </Row>
        </Container>
      </div> 
   </div>
  )
}

export default TechnologySection


              
              
              
      
              