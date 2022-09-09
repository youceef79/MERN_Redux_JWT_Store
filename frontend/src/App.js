import './App.css';
import Landing from './Components/Landing';
import Nav from './Components/Header/Nav'
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate ,useLocation } from 'react-router-dom'
import { Redirect } from 'react-router'
import Products from './Components/Contents/Products';
import Footer from './Components/Footer/Footer';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NotificationContainer } from 'react-notifications';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Components/Contents/Auth/Login'
import Register from './Components/Contents/Auth/Register'
import { reset } from './reducers/authSlice'

export default function App (){

  const { user } = useSelector(
    (state) => state.auth
  )

  const dispatch = useDispatch() 

  const navigate = useNavigate()

  //<Navigate to="/products" />
  useEffect(()=> {
     dispatch(reset())
  }, [])

  const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
  )

  const location = useLocation();

  return (
      <div id="main" className={location.pathname === "/" ? 'App_landing' : 'App'}>
      <img className={location.pathname === "/" ? 'd-none' : 'd-block back'} src="sport_images/main_layout4.png" alt=""/> 
      <ToastContainer position="top-right"/>
      <Container id="content" className="content">
        <Nav />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/products' element={<Products />} />
          <Route path='/login' element={ user ? <Navigate to="/products" />  :  <Login /> } />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Container>
      </div>
  );
}
