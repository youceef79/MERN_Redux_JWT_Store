import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import './LandingContent.css'

export default function LandingContent() {
  return (
    <>
    <header className='d-none d-sm-none d-md-block'>
        <Row xs={12} md={12}>
          <Col xs={6} md={6}>
         <div style={{ fontSize : '1vw',}} className='header_text mt-5'>
            <h1 style={{ fontSize : '4vw',}}> BOOST <br/> YOUR POWER <br/> NOW</h1>
            <p>Lorem ipsum dolor sit amet. Ex nesciunt galisum et eveniet eaque est exercitationem totam est beatae natus et obcaecati iure. Ab blanditiis unde et nobis. perferendis non praesentium quos!</p>
            <button className='skewed' type='text' > <span> Click Here </span></button>
         </div>
         </Col>
         <Col xs={6}>
         <div className='header_images'>
          <div className='cycle'>
           <img src="sport_images/page_103.png" alt="alt" />
           </div>
           <div className='shade'>
           <img src="sport_images/page_102.png" alt="alt" />
           </div>
         </div>
         </Col>
         </Row>
       </header>
       <div className='header_pagin d-none d-sm-none d-md-block'>
       <img src="sport_images/page_105.png" alt="logo" />
       <img src="sport_images/page_105.png" alt="logo" />
       <img src="sport_images/page_107.png" alt="logo" />
       <img src="sport_images/page_105.png" alt="logo" />
       </div>
        <Container className='px-5 mt-0 mt-5 mb-5 pb-4'>
          <Row xs={12} md={8} className='d-xs-none gy-2 my-2 my-md-4'>
        <Col xs={12} md={6}> 
        <div className='card'>
        <img className='rect' src="sport_images/rec1.png" alt="rec"/>
        <Row>
        <Col xs={6}>
        <div className='inner_text'>
          <h6> Lorem ipsum bjhqc <br /> jhbcsq kbiqs</h6>
          <p> jkvvv iho evoinoi vaoinova <br /> ovioi oijve oinvoenved <br /> ovioi oijve oinvoenved</p>
          <button> More </button>
        </div>
        </Col>
        <Col xs={6}>
        <img className='inner_img1 mr-xs-0 right-n5' src="sport_images/page_93.png" alt="logo" />
        </Col>
        </Row>
        </div>  
        </Col>
        <Col xs={12} md={6}>
        <div className='card'>
        <img className='rect' src="sport_images/rec2.png" alt="rec"/>
        <Row>
        <Col xs={6}>
        <div className='inner_text text-black'>
          <h6> Lorem ipsum bjhqc <br /> jhbcsq kbiqs</h6>
          <p> jkvvv iho evoinoi vaoinova <br /> ovioi oijve oinvoenved <br /> ovioi oijve oinvoenved</p>
          <button className='text-black'> More </button>
        </div>
        </Col>
        <Col xs={6}>
        <img className='inner_img2 mr-xs-0 right-n5' src="sport_images/page_86.png" alt="logo" />
        </Col>
        </Row>
        </div>
        </Col>
        </Row>
        <Row xs={12} md={8} className='gy-2'>
        <Col xs={12} md={6}>
        <div className='card'>
        <img className='rect'  src="sport_images/rec3.png" alt="rec"/>
        <Row>
        <Col xs={6}>
        <div className='inner_text text-black'>
          <h6> Lorem ipsum bjhqc <br /> jhbcsq kbiqs</h6>
          <p> jkvvv iho evoinoi vaoinova <br /> ovioi oijve oinvoenved <br /> ovioi oijve oinvoenved</p>
          <button className='text-black'> More </button>
        </div>
        </Col>
        <Col xs={6}>
        <img className='inner_img3 mr-xs-0 right-n5' src="sport_images/page_78.png" alt="logo" />
        </Col>
        </Row>
        </div>
        </Col>
        <Col className='d-none d-sm-none d-md-block' xs={12} md={6}>
        <div className='card'>
        <img  className='rect' src="sport_images/rec4.png" alt="rec"/>
        <Row>
        <Col xs={6}>
        <div className='inner_text'>
          <h6> Lorem ipsum bjhqc <br /> jhbcsq kbiqs</h6>
          <p> jkvvv iho evoinoi vaoinova <br /> ovioi oijve oinvoenved <br /> ovioi oijve oinvoenved</p>
          <button> More </button>
        </div>
        </Col>
        <Col xs={6}>
        <img className='inner_img4 mr-xs-0 right-n5' src="sport_images/page_70.png" alt="logo" />
        </Col>
        </Row>
        </div>
        </Col>
        </Row>
        </Container>
        <Container className='mt-3 mt-xs-5'>
        <Row>
        <Col>
        <div className='text-center pt-5'>
           <h2> EXPLORE THE NEWEST PRODUCTS </h2>
           <p className='py-2' style={{ fontSize : '15px',}}> Lorem ipsum bjhqc jhbcsq kbiqs jkvvv iho evoinoi vaoinova ovioi oijve oinvoenved ovioi oijve oinvoenved </p>
        </div>
        </Col>
        </Row>
        <Container className='px-5 mb-1 py-4 mb-xs-5 mb-sm-5 mb-md-0'>
          <Row xs={12} md={12} className='gy-2 gx-xs-2 my-2 my-md-4'>
          <Col xs={4} >
        <div className='white_card text-center'>
        <img className='position-relative mb-4' src="sport_images/page_47.png" alt="logo"/>
          <div style={{ fontSize : '1.5vw',}} className='d-flex mt-2 pb-2'>
             <span>Blouve </span>
             <span> $27.00</span>
          </div>
        </div>
        </Col>
        <Col xs={4}>
        <div className='white_card text-center'>
        <img className='position-relative mb-4' src="sport_images/page_53.png" alt="logo"/>
          <div className='position-relative mt-2 pb-2'>
          <div style={{ fontSize : '1.5vw',}} className='d-flex px-n5'>
             <span>Blouve </span>
             <span> $27.00</span>
          </div>
          </div>
       </div>
        </Col>
        <Col xs={4}>
        <div className='white_card text-center'>
        <img className='position-relative mb-4' src="sport_images/page_53.png" alt="logo"/>
          <div className='position-relative mt-2 pb-2'>
          <div style={{ fontSize : '1.5vw',}} className='d-flex px-n5'>
             <span>Blouve </span>
             <span> $27.00</span>
          </div>
          </div>
       </div>
        </Col>
        </Row>
        </Container>
        </Container> 
        <Container className='mb-md-0 mb-sm-0 mb-5 pb-md-0 pb-sm-0 pb-5'>
           <Row xs={4} className='pt-4 mb-5'>
            <Col xs={4} className='pt-4' >
             <div style={{ fontSize : '1vw',}}>
            <h1 style={{ fontSize : '3vw',}}> BOOST <br/> YOUR POWER <br/> NOW</h1>
            <p className='w-100'>Lorem ipsum dolor sit amet. Ex nesciunt galisum et eveniet eaque est exercitationem totam est beatae natus et obcaecati iure. Ab blanditiis unde et nobis. perferendis non praesentium quos!</p>
            <button className='skewed border-dark text-black' type='text' > <span> Know </span></button>
         </div>
          </Col>
             <Col xs={8} md={8}>
             <img className='position-relative' style={{ width : '90%',}} src="sport_images/page_40.png"/>
             </Col>
           </Row>
        </Container>
        <Container className='mt-md-0 mt-sm-0 mt-5 pt-md-0 pt-sm-0 pt-5'>
           <Row xs={4} className='pt-xs-5 pt-sm-5 pt-md-0'>
           <Col xs={8} md={8} className="mt-xs-5 mt-sm-5 mt-md-0">
             <img className='position-relative' style={{ width : '70%',}} src="sport_images/page_34.png"/>
          </Col>
          <Col xs={4} className='pt-4' >
             <div style={{ fontSize : '1vw',}}>
            <h1 className='text-white' style={{ fontSize : '3vw',}}> BOOST <br/> YOUR POWER <br/> NOW</h1>
            <p className='w-100'>Lorem ipsum dolor sit amet. Ex nesciunt galisum et eveniet eaque est exercitationem totam est beatae natus et obcaecati iure. Ab blanditiis unde et nobis. perferendis non praesentium quos!</p>
            <button className='skewed border-dark text-black' type='text' > <span> Know </span></button>
         </div>
          </Col>
           </Row>
        </Container>
        <Container style={{ fontSize : '1vw',}} className='my-md-5 my-0 py-md-5 py-0'>
           <Row xs={4} className='mt-md-0 mt-5 pt-md-0 pt-5'>
           <Col xs={6} md={5} className='mt-5'>
          <div className='mt-3'>
            <h5 style={{ fontSize : '2vw',}} className='text-white'> Sign up to our newsletter</h5>
            <h4 style={{ fontSize : '1.5vw', color : "yellow",}}> &amp; get 10% off voucher </h4>
         </div>
          </Col>
           <Col xs={6} className='mt-4 pt-5'>
             <input className='skewed-input' type="text" placeholder='Type Your Email'/> 
             <button className='skewed-button-info '><span> Submit </span></button> 
          </Col>
           </Row>
        </Container> 
        <Container style={{ fontSize : '1vw',}} className='mt-md-5 mt-0 pt-md-5 pt-0 mb-md-0 mb-4'>
           <Row md={12}>
           <Col md={4} className='mt-5 pt-3'>
          <img src="sport_images/logo.png" alt="logo" />
          </Col>
          <Col className='gy-md-0 gy-4' md={8}>
          <Row>
           <Col xs={3} className='mt-4 pt-5'>
              <ul>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
              </ul> 
          </Col>
          <Col xs={3} className='mt-4 pt-5'>
          <ul>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
              </ul> 
          </Col>
          <Col xs={3} className='mt-4 pt-5'>
          <ul>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
                <li>Lorem</li>
              </ul>  
          </Col>
          <Col xs={3} className='mt-4 pt-5'>
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
        <Container style={{ fontSize : '1.4vw',}} className='mt-0 mt-md-5 text-center text-white'>
           <Row className='pt-0 pt-md-5'>
           <Col>
             <span> &copy; Sport Life 2022 </span> 
          </Col>
           </Row>
        </Container> 
        </>
  )
}
