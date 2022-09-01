import React from 'react'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux';
import { useState } from 'react';
import CustomizedDialogs from './CustomizedDialogs';
//import { AiOutlineShoppingCart  } from 'react-icons/ai';

function Nav() {
  

  const { cart_items } = useSelector(
    (state) => state.cart
  )

  const [cartcount, setCartcount] = useState(0)

  useEffect(() => {
 
   setCartcount((prev) => {
       return cart_items?.length
    })

  }, [cart_items])


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
  

  const [openDialog, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        <MenuItem onClick={handleClose}>HOME</MenuItem>
        <MenuItem onClick={handleClose}>COMPANY</MenuItem>
        <MenuItem onClick={handleClose}>PRODUCTS</MenuItem>
      </StyledMenu>
          <ul>
           <Link className='d-none d-sm-none d-md-block text-decoration-none ' to='/'><li className='brd d-none d-sm-none d-md-block'>HOME</li> </Link>
            <li className='brd d-none d-sm-none d-md-block'>COMPANY</li>
            <li className='brd d-none d-sm-none d-md-block'>SPORTS STARS</li>
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
          </ul>
          </div>
      </div>
  )
}

export default Nav;