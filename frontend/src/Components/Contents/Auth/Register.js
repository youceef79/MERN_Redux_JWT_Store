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
import { useNavigate } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import Box from '@mui/material/Box';
import { register, reset } from '../../../reducers/authSlice'

const Register = () => {

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

  const { isError, message, isLoading ,isRegister, user } = useSelector(
    (state) => state.auth
  )

  const dispatch = useDispatch()
  const navigate = useNavigate(); 

  const [error , setError] = useState({}) 


  React.useEffect(() => {

     if(isRegister)
     navigate('/login') 

    }, [isRegister]);

  const handleSubmit = (event) => {
    setError({})
    dispatch(reset())
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    if( data.get('name') == "" || data.get('email') == "" ){
        setError({ message: "please enter your name or/and email"})
        return       
    }

    if( data.get('password') == "" || data.get('confirm_password') == "" ){
        setError({ message: "please enter your password and/or confirmed password !"})
        return       
    }

    if( data.get('password') !== data.get('confirm_password') ){
        setError({ message: "please confirm your password"})
        return       
    }
    
    const user = {
       name: data.get('name'),
       email: data.get('email'),
       password: data.get('password')
    }

     dispatch(register(user))

  };

    return (
        <Container className="text-white" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            height: 400,
            paddingBottom: 25,
            overflowY: "scroll",
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
         <Avatar sx={{ m: 1, bgcolor: 'gold' }}>
            <AppRegistrationOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <div className="d-flex justify-content-start align-items-start">
          </div>
          <Box component="form" onSubmit={handleSubmit} noValidate 
          sx={{ width: "65%" ,mt: 1 }}>
          { isLoading &&  <div className="d-flex position-relative justify-content-center align-items-center">
            <CircularProgress color="primary" style={{ width: '5%', height: '5%'}} /> 
            </div> } 
          { error.message && <CssAlert variant="filled" severity="error"> {error.message} </CssAlert> }
          { isError && <CssAlert variant="filled" severity="error"> {message} </CssAlert> }
            <CssTextField
              margin="normal"
              required
              fullWidth
              name="name"
              label="Full Name"
              type="text"
              id="name"
            />
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
            <CssTextField
              margin="normal"
              required
              fullWidth
              name="confirm_password"
              label="Confirm password"
              type="password"
              id="confirm_password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "gold", color: "#000" }}
            >
              Register
            </Button>
            <Grid container className="justify-content-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  {"You have an account? login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container> 
    );
};


export default Register;
