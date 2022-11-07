import React from 'react';
import { IoLogoJavascript , IoLogoHtml5 , IoLogoCss3 , } from 'react-icons/io'
import {BsBootstrap} from 'react-icons/bs'
import {FaReact} from 'react-icons/fa'
import {SiNextdotjs} from 'react-icons/si'

import { Col, Container, Row } from 'react-bootstrap';

const TechnologySection = () => {
  return (
   <div id='skills'>
      <div className='background-technology'>
        <Container>
          <h2 className='title'>Tecnologias que utilizo</h2>
            <Row className='row-container-technology'>
              <Col className='icons-container'  md={2} xs={6}>
                <IoLogoHtml5 className='icons' />
                <h3>HTML5</h3>
              </Col >
              <Col className='icons-container' md={2} xs={6}>
                <IoLogoCss3 className='icons'/>
                <h3>CSS3</h3>
              </Col >
              <Col className='icons-container' md={2} xs={6}> 
                <IoLogoJavascript className='icons'/> 
                <h3>JavaScrip ES6</h3>
              </Col >      
            </Row>
            <Row className='row-container-technology'>
              <Col className='icons-container' md={2} xs={6}>
                <BsBootstrap className='icons'/> 
                <h3>Bootstrap</h3>
              </Col >
              <Col className='icons-container' md={2} xs={6}> 
                <SiNextdotjs className='icons'/>
                <h3>Next.JS</h3> 
              </Col>
              <Col className='icons-container' md={2} xs={6}> 
                <FaReact className='icons'/> 
                <h3>React.JS</h3>
              </Col >
            </Row>
        </Container>
      </div> 
   </div>
  )
}

export default TechnologySection


              
              
              
      
              