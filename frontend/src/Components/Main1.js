import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Main.css';

export default function Main() {
  return (
      <Container>
      <div className='navbar'>
        <div className='logo'>
        <img src="sport_images/logo.png" alt="logo" />
        </div>
        <div>
          <ul>
            <li className='brd'>HOME</li>
            <li className='brd'>COMPANY</li>
            <li className='brd'>SPORTS STARS</li>
            <li>PRODUCTS</li>
            <li>CONTACT</li>
            <li>BUY NOW</li>
          </ul>
          </div>
      </div>
    <div className='main-section'>
       <header>
         <div className='header_text'>
            <h1> BOOST <br/> YOUR POWER <br/> NOW</h1>
            <p>Lorem ipsum dolor sit amet. Ex nesciunt galisum et eveniet eaque est exercitationem totam est beatae natus et obcaecati iure. Ab blanditiis unde et nobis. perferendis non praesentium quos!</p>
            <button className='skewed' type='text' > <span> Click Here </span></button>
         </div>
         <div className='header_images'>
          <div className='cycle'>
           <img src="sport_images/page_103.png" alt="alt" />
           </div>
           <div className='shade'>
           <img src="sport_images/page_102.png" alt="alt" />
           </div>
         </div>
       </header>
       <div className='header_pagin'>
       <img src="sport_images/page_105.png" alt="logo" />
       <img src="sport_images/page_105.png" alt="logo" />
       <img src="sport_images/page_107.png" alt="logo" />
       <img src="sport_images/page_105.png" alt="logo" />
       </div>
        <Container className='px-5 mb-5 pb-4'>
          <Row className='gy-2 my-2 my-md-4'>
        <Col>
        <div className='card'>
        <img className='rect' src="sport_images/rec1.png" alt="rec"/>
        <img className='inner_img1' src="sport_images/page_93.png" alt="logo" />
        <div className='inner_text'>
          <h6> Lorem ipsum bjhqc <br /> jhbcsq kbiqs</h6>
          <p> jkvvv iho evoinoi vaoinova <br /> ovioi oijve oinvoenved <br /> ovioi oijve oinvoenved</p>
          <button> More </button>
        </div>  
        </div>
        </Col>
        <Col>
        <div className='card'>
        <img className='rect' src="sport_images/rec2.png" alt="rec"/>
        <img className='inner_img2' src="sport_images/page_86.png" alt="logo" />
        <div className='inner_text' style={{ color : '#000',}}>
          <h6> Lorem ipsum bjhqc <br /> jhbcsq kbiqs</h6>
          <p> jkvvv iho evoinoi vaoinova <br /> ovioi oijve oinvoenved <br /> ovioi oijve oinvoenved</p>
          <button style={{ color : '#000',}}> More </button>
        </div>  
        </div>
        </Col>
        </Row>
        <Row className='gy-2'>
        <Col>
        <div className='card'>
        <img className='rect'  src="sport_images/rec3.png" alt="rec"/>
        <img className='inner_img3' src="sport_images/page_78.png" alt="logo" />
        <div className='inner_text' style={{ color : '#000',}}>
          <h6> Lorem ipsum bjhqc <br /> jhbcsq kbiqs</h6>
          <p> jkvvv iho evoinoi vaoinova <br /> ovioi oijve oinvoenved <br /> ovioi oijve oinvoenved</p>
          <button style={{ color : '#000',}}> More </button>
        </div>  
        </div>
        </Col>
        <Col>
        <div className='card'>
        <img  className='rect' src="sport_images/rec4.png" alt="rec"/>
        <img className='inner_img4' src="sport_images/page_70.png" alt="logo" />
        <div className='inner_text'>
          <h6> Lorem ipsum bjhqc <br /> jhbcsq kbiqs</h6>
          <p> jkvvv iho evoinoi vaoinova <br /> ovioi oijve oinvoenved <br /> ovioi oijve oinvoenved</p>
          <button> More </button>
        </div>  
        </div>
        </Col>
        </Row>
        </Container>
        <Container>
        <Row>
        <Col>
        <div className='text-center pt-3'>
           <h2> EXPLORE THE NEWEST PRODUCTS </h2>
           <p className='py-2' style={{ fontSize : '15px',}}> Lorem ipsum bjhqc jhbcsq kbiqs jkvvv iho evoinoi vaoinova ovioi oijve oinvoenved ovioi oijve oinvoenved </p>
        </div>
        </Col>
        </Row>
        <Container className='px-5 mb-5 py-4'>
          <Row className='gy-2 gx-0 my-2 my-md-4'>
          <Col xs={4} >
        <div className='white_card text-center'>
        <img className='position-relative mb-4' src="sport_images/page_47.png" alt="logo"/>
          <div className='d-flex px-n2 mt-2' 
          style={{ fontSize : '12px'}}>
             <span className=''>Blouve </span>
             <span className=''> $27.00</span>
          </div>
        </div>
        </Col>
        <Col xs={4}>
        <div className='white_card text-center'>
        <img className='position-relative mb-4' src="sport_images/page_53.png" alt="logo"/>
          <div className='position-relative mt-2'>
          <div className='d-flex px-n5' style={{ fontSize : '12px',}}>
             <span>Blouve </span>
             <span> $27.00</span>
          </div>
          </div>
       </div>
        </Col>
        <Col xs={4}>
        <div className='white_card text-center'>
        <img className='position-relative mb-4' src="sport_images/page_61.png" alt="logo"/>
          <div className='position-relative mt-2'>
          <div className='d-flex px-n5' style={{ fontSize : '12px',}}>
             <span>Blouve </span>
             <span> $27.00</span>
          </div>
          </div>
       </div>
        </Col>
        </Row>
        </Container>
        </Container> 
        <Container>
           <Row className='pt-4'>
            <Col className='pt-4' >
             <div>
            <h1> BOOST <br/> YOUR POWER <br/> NOW</h1>
            <p className='w-100'>Lorem ipsum dolor sit amet. Ex nesciunt galisum et eveniet eaque est exercitationem totam est beatae natus et obcaecati iure. Ab blanditiis unde et nobis. perferendis non praesentium quos!</p>
            <button className='skewed border-dark text-black' type='text' > <span> Know </span></button>
         </div>
          </Col>
             <Col md={8}>
             <img className='position-relative' style={{ width : '90%',}} src="sport_images/page_40.png"/>
             </Col>
           </Row>
        </Container>
        <Container className='w-60 mt-4 mx-0'>
           <Row className='mx-0 px-0'>
           <Col md={7}>
             <img className='position-relative' style={{ width : '70%'}} src="sport_images/page_34.png"/>
          </Col>
          <Col className='my-3'>
          <div className='mt-5'>
            <h1 className='text-white'> BOOST <br/> YOUR POWER <br/> NOW</h1>
            <p>Lorem ipsum dolor sit amet. Ex nesciunt galisum et eveniet eaque est exercitationem totam est beatae natus et obcaecati iure. Ab blanditiis unde et nobis. perferendis non praesentium quos!</p>
            <button className='skewed border-dark text-black' type='text' > <span> Know </span></button>
         </div>
          </Col>
           </Row>
        </Container>
        <Container className='info mt-5 py-4'>
           <Row>
           <Col md={5} className='mt-5'>
          <div className='mt-3'>
            <h5 className='text-white'> Sign up to our newsletter</h5>
            <h4 style={{color : "yellow",}}> &amp; get 10% off voucher </h4>
         </div>
          </Col>
           <Col className='mt-4 pt-5'>
             <input className='skewed-input' type="text" placeholder='Type Your Email'/> 
             <button className='skewed-button-info '><span> Submit </span></button> 
          </Col>
           </Row>
        </Container>   
    </div>
    </Container>
  )
}
