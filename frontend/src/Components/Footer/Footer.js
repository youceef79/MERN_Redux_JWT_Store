import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import './Footer.css'

function Footer() {
  return (
     <div className='footer position-relative'>
           <Container>
           <Row xs={6} md={12}>
           <Col xs={4} md={4} className='pt-3'>
          <img src="sport_images/logo.png" alt="logo" />
          </Col>
          <Col xs={8} md={8} className='gy-md-0 gy-5 mt-5'>
          <Row>
           <Col xs={3}>
              <ul>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
              </ul> 
          </Col>
          <Col xs={3}>
          <ul>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
              </ul> 
          </Col>
          <Col xs={3}>
          <ul>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
              </ul>  
          </Col>
          <Col xs={3}>
          <ul>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
              </ul>  
          </Col>
          </Row>
          </Col>
           </Row>
        </Container> 
        <Container style={{ fontSize : '1.4vw',}} className='mt-0 text-center text-white'>
           <Row className='pt-0 pt-md-5'>
           <Col>
             <span> &copy; Sport Life 2022 </span> 
          </Col>
           </Row>
        </Container> 
    </div>
  )
}

export default Footer 
