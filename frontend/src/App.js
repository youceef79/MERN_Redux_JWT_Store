//import logo from './logo.svg';
import './App.css';
import Landing from './Components/Landing';
import Nav from './Components/Header/Nav'
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Products from './Components/Contents/Products';
import Footer from './Components/Footer/Footer';
import { NotificationContainer } from 'react-notifications';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App (){

  const location = useLocation();

  console.log(location.pathname);

  return (
      <div id="main" className={location.pathname === "/" ? 'App_landing' : 'App'}>
      <img className={location.pathname === "/" ? 'd-none' : 'd-block back'} src="sport_images/main_layout4.png" alt=""/> 
      <ToastContainer position="top-right"/>
      <Container className="content">
      <Nav />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </Container>
      </div>
  );
}
