import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import RefreshIcon from '@mui/icons-material/Refresh';
import CircularProgress from '@mui/material/CircularProgress';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch, batch } from 'react-redux'
import { useEffect } from 'react'
import { getCartItems, removeItemFromCart, updateCart } from '../../reducers/cartReducer'


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogTitle-root': {
    background: "#00",
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({ open, handleClose }) {


  const dispatch = useDispatch()

  const { cart_items, upIsLoading, delIsLoading,  } = useSelector(
    (state) => state.cart
  )
  const [quantities, setQuantities] = React.useState({})

  const [state, updateState] = React.useState()

  const actionIsLoading = upIsLoading || delIsLoading

  
    React.useEffect(() => {

    dispatch(getCartItems())
    
    }, []);


  React.useEffect(() => {
       return () => {
         setQuantities({})   
       }
    }, []);


  const removeItem = (id) => {
      dispatch(removeItemFromCart(id))
  }

  const updateItem = (id) => {
       let name = "item"+id
       dispatch(updateCart({
           id: id,
           quantity: quantities[name]
       }))
  }

  const updateQuantities = async (e) => {
       let { name, value } = e.target
       name = "item"+name 
       setQuantities((prev) => ({ ...prev, [name]: parseInt(value) }) )
  }
  
  return (
    <div>
      <BootstrapDialog
        maxWidth='md'
        scroll='paper'
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
           Cart {quantities["item630cf5abb36087032c789d06"]}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Container  style={{ overflow: "scrollY", maxHeight: "300px"}}>
          {  actionIsLoading && 
             <div style={{ width: "100%", height: "100%", zIndex: "10"}} className="bg-white d-flex position-relative justify-content-center align-items-center">
             <CircularProgress className="position-relative d-flex" color="primary" style={{ width: '20%', height: '20%'}} /> 
             </div> 
           }
           { cart_items?.length == 0 ?  
            <img style={{width: "40%", height: "40%"}} className="position-relative center d-flex" src="sport_images/empty_cart.png" /> 
             : !actionIsLoading && cart_items?.map((item, index) => ( 
            <>
            <Row md={12} className="py-2 text-center m-auto">
            <Col md={3}>
            <img style={{ maxWidth: "100px", maxHeight: "100px" }} className='position-relative' src={`sport_images/${item.product.image}`} alt="logo"/>
            </Col>
            <Col md={3} className="m-auto">
                {item.product.desc}
            </Col>
            <Col md={2} className="m-auto">
                {item.product.price}$
            </Col>
            <Col md={2} className="m-auto">
            <TextField
          style={{ width: '50%'}}
          name={item._id}
          onChange={(e) => updateQuantities(e)}
          defaultValue={item.quantity} 
          InputProps={{ inputProps: { min: 0} }}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
             />             
           </Col>
             <Col md={2} className="m-auto d-flex">
             <IconButton onClick={() => updateItem(item._id)}> <RefreshIcon /> </IconButton> <IconButton onClick={() => removeItem(item._id)}>  <DeleteIcon style={{color: "red",}} /> </IconButton> 
             </Col>
          </Row>
          { cart_items?.length > 1 && index != cart_items?.length-1  ? <hr/> : "" }
          </> )) 
          }
         </Container>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
