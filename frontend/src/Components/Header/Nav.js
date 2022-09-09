import React from 'react'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Chip from '@mui/material/Chip';
import { alpha, styled } from '@mui/material/styles';
import { deepOrange, deepPurple } from '@mui/material/colors';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux';
import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { getCartItems } from '../../reducers/cartSlice'
import Avatar from '@mui/material/Avatar';
import CustomizedDialogs from './CustomizedDialogs';
import { logout } from '../../reducers/authSlice'

function Nav() {
  

  const { cart_items } = useSelector(
    (state) => state.cart
  )

  const { user, isLogout } = useSelector(
    (state) => state.auth
  )

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [cartcount, setCartcount] = useState(0)

  useEffect(() => {
 
   setCartcount((prev) => {
       return cart_items?.length
    })

  }, [cart_items])


  const CssButton = styled(Button)({  
  borderColor: 'gold',
  '&:hover': {
    backgroundColor: 'gold',
    borderColor: '#0062cc',
    boxShadow: 'none',
    color: '#fff'
  },
  '&:focus': {
    boxShadow: '0 0 0 0.1rem gold',
  },
});

   const CssMenuItem = styled(MenuItem)({  
  '& .MuiListItemIcon-root': {
    margin: "0",
  }
});

  const StyledMenu = withStyles({
    paper: {
     position: "relative",
    },
    list: {
      background: '#6b6b6b',
      color: '#fff',
    }
  })(props => (
    <Menu
      {...props}
    />
  ));
  
  const location = useLocation();

  const [openDialog, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const logoutHandle = () => {
      dispatch(logout())
      dispatch(getCartItems())
      navigate('/login') 
  }

  const handleCloseDialog = () => {
    setOpen(false);
  };
 
  const [anchorElAvatar, setAnchorElAvatar] = React.useState(null);
  const openAvatar = Boolean(anchorElAvatar);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickAvatar = (event) => {
    setAnchorElAvatar(event.currentTarget);
  };
   
   const handleCloseAvatar = () => {
    setAnchorElAvatar(null);
  };

  return (
        <div className='navbar'>
        <div className='logo'>
        <img src="sport_images/logo.png" alt="logo" />
        </div>
        <div>
        <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => {  setAnchorEl(null); navigate('/'); }}>HOME</MenuItem>
        <MenuItem onClick={handleClose}>COMPANY</MenuItem>
        <MenuItem onClick={() => {  setAnchorEl(null); navigate('/products'); }}>PRODUCTS</MenuItem>
        { !user && <>
        <MenuItem onClick={() => {  setAnchorEl(null); navigate('/login'); }}> <CssButton variant="outlined" startIcon={<LoginOutlinedIcon />}> Login </CssButton> </MenuItem>   
        <MenuItem onClick={() => {  setAnchorEl(null); navigate('/register'); }}> <CssButton variant="outlined" startIcon={<PersonAddAltOutlinedIcon />}> Sign up </CssButton> </MenuItem> </> }
      </StyledMenu>
          <ul>
           <Link className='d-none d-sm-none d-md-block text-decoration-none ' to='/'><li className='brd d-none d-sm-none d-md-block'>HOME</li> </Link>
            <li className='brd d-none d-sm-none d-md-block'>COMPANY</li>
            <Link className='d-none d-sm-none d-md-block' to='/products'> <li> PRODUCTS </li></Link>
            <CustomizedDialogs open={openDialog} handleClose={handleCloseDialog} />
            <li 
        id="basic-button"
        onClick={handleClick}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
         className='d-xs-block d-sm-block d-md-none'> <MenuIcon /></li>
            <li onClick={handleOpenDialog}> <Badge color="primary" badgeContent={cartcount}>
             { cartcount > 0 ? <ShoppingCartIcon /> : <ShoppingCartOutlinedIcon /> }
        </Badge>
        </li>
        { user && <li>   
           <Avatar  onClick={handleClickAvatar}
            aria-controls={openAvatar ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openAvatar ? 'true' : undefined} sx={{ width: 35, height: 35, bgcolor: deepOrange[400] }}><span className="text-uppercase" style={{ fontSize: "15px" }}>{ user?.name[0]+user?.name[1] }</span></Avatar> </li>
             }
           { !user && ( <div className="d-none d-sm-none d-md-block"> <li> <CssButton style={{ backgroundColor: location.pathname === "/login" ? 'gold' : '', color: location.pathname === "/login" ? '#fff' : ''  }} onClick={() => navigate('/login')} variant="outlined" startIcon={<LoginOutlinedIcon />}> Login </CssButton> </li>   
                     <Chip style={{ backgroundColor: "rgb(255, 255, 255, 0.3)" }} className="text-white" size="small" label="OR" />  <li> <CssButton style={{ backgroundColor: location.pathname === "/register" ? 'gold' : '', color: location.pathname === "/register" ? '#fff' : ''  }} onClick={() => navigate('/register')} variant="outlined" startIcon={<PersonAddAltOutlinedIcon />}> Sign up </CssButton> </li> </div> ) }   
          </ul>
          </div>
           <Menu
        anchorEl={anchorElAvatar}
        id="account-menu"
        open={openAvatar}
        onClose={handleCloseAvatar}
        onClick={handleCloseAvatar}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> { user?.name }
        </MenuItem>
        <Divider />
        <CssMenuItem onClick={logoutHandle}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </CssMenuItem>
      </Menu>
      </div>
  )
}

export default Nav;