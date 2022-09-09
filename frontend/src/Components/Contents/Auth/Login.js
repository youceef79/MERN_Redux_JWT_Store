import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Pagination from '@mui/material/Pagination';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Alert from '@mui/material/Alert';
import { useDispatch } from 'react-redux'
import Grid from '@mui/material/Grid';
import { connect } from 'react-redux';
import { v4 as uuid_v4 } from "uuid";
import CircularProgress from '@mui/material/CircularProgress';
import { NotificationManager } from 'react-notifications';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { alpha, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Box from '@mui/material/Box';
import { getCartItems } from '../../../reducers/cartSlice'
import { login, reset } from '../../../reducers/authSlice'

const Login = () => {

  const CssTextField = styled(TextField)({
  '& label': {
    color: 'grey',
  },
  '& label.Mui-focused': {
    color: 'yellow',
  },
  '& input': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '& legend': {
      margin: '0',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'yellow',
    },
  },
});

  const CssAlert = styled(Alert)({
  '& .MuiAlert-icon': {
    margin: '0',
  },
  '& .MuiAlert-message': {
    margin: '0',
    paddingLeft: '8px',
  },
});

 const dispatch = useDispatch()

 const navigate = useNavigate(); 


 const { isLogout, isRegister, user } = useSelector(
    (state) => state.auth
  )

 const [logout, setLogout] = React.useState(false);
 const [register, setRegister] = React.useState(false);
 
 const { isError, isLoginSuccess, isLoading } = useSelector(
    (state) => state.auth
  )

 const [error , setError] = useState({}) 

 React.useEffect(() => {
     
     dispatch(getCartItems())   
       if(isLogout) {
          setLogout(true)
          setTimeout(() => {
           setLogout(false) 
          }, 5000)
       }

        if(isRegister) {
          setRegister(true)
          setTimeout(() => {
           setRegister(false) 
          }, 5000)
       }

     dispatch(reset())  
    }, [isLogout, isRegister]);

  React.useEffect(() => {
     dispatch(getCartItems()) 
    }, []);


  const handleSubmit = async (event) => {
    dispatch(reset()) 
    setError({})
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    if( data.get('email') == "" || data.get('password') == "" ){
        setError({ message: "please enter your email or/and password"})
        return       
    }

    dispatch(login({
      email: data.get('email'),
      password: data.get('password'),  
    })) 
  };

    return (
        <Container className="text-white" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            height: 400,
            paddingBottom: 25,
            overflowY: "scroll",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'gold' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width: "65%", mt: 1 }}>
          { isLoading && 
            <div className="d-flex position-relative justify-content-center align-items-center">
            <CircularProgress color="primary" style={{ width: '5%', height: '5%'}} /> 
            </div> 
          }
          { error.message && <CssAlert variant="filled" severity="error"> {error.message} </CssAlert> }
          { (!isLoading && isError) && <CssAlert variant="filled" severity="error"> credentials are incorrect, please verify your email and password</CssAlert> }
          {  logout && <CssAlert variant="filled" severity="success"> you logged out successfully !</CssAlert> }
          {  register && <CssAlert variant="filled" severity="success"> Welcome to our platform, please login !</CssAlert> }
            <CssTextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <CssTextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "gold", color: "#000" }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container> 
    );
};


export default Login;
