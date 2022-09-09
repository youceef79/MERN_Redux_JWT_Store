import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Pagination from '@mui/material/Pagination';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Alert from '@mui/material/Alert';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useDispatch } from 'react-redux'
import Grid from '@mui/material/Grid';
import { connect } from 'react-redux';
import { alpha, styled } from '@mui/material/styles';
import { v4 as uuid_v4 } from "uuid";
import CircularProgress from '@mui/material/CircularProgress';
import './Products.css'
import { NotificationManager } from 'react-notifications';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cartIncrement } from '../../actions/cartActions';
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CheckIcon from '@mui/icons-material/Check';
import { addToCart, getCartItems } from '../../reducers/cartSlice'
import { reset } from '../../reducers/authSlice'
import { getAllProducts, getAllCategories, getProductsByCat } from '../../reducers/productSlice'


function Products() {
   
   const CssAlert = styled(Alert)({
  '& .MuiAlert-icon': {
    margin: '0',
  },
  '& .MuiAlert-message': {
    margin: '0',
    paddingLeft: '8px',
  },
});

   const { product_items, product_items_by_cat, categories, isLoading } = useSelector(
    (state) => state.product
  )
   const { cart_items } = useSelector(
    (state) => state.cart
  )
   const { isLoginSuccess } = useSelector(
    (state) => state.auth
  )


   const dispatch = useDispatch()
   const [page, setPage] = React.useState(1);
   const [catclicked, setCatclicked] = React.useState(null);
   const [spinclicked, setSpinclicked] = React.useState(-1);
   const [loading, setLoading] = React.useState(false);
   const [succeessLogin, setSucceessLogin] = React.useState(false);
   const allItems = catclicked == null ? product_items : product_items_by_cat
   const MAX_ITEMS = 8
   const paginationCount = Math.ceil(allItems.length / MAX_ITEMS)

   React.useEffect(() => {
       dispatch(getAllProducts())
       dispatch(getAllCategories())
       dispatch(getCartItems())
    }, []);

   React.useEffect(() => {
       if(isLoginSuccess) {
          setSucceessLogin(true)
          setTimeout(() => {
           setSucceessLogin(false) 
          }, 5000)
       }
       dispatch(reset())
    }, [isLoginSuccess]);
  
   
   const handleChange = (event, value) => {
     setPage(value);
   };

   const categoryClick = (i, c) => {
         setCatclicked(i)
         if(c)   
         dispatch(getProductsByCat(c._id))
         setPage(1)   
   }

   const addCart = (p) => {
      let inCart = cart_items.filter((it) => it.product._id == p._id)
      console.log("inCart : "+ inCart)
      if(inCart.length == 0){
       let item = {
           product: p._id,
           quantity: "1"
       }
      dispatch(addToCart({ item }))
      toast.success('item added to cart !', 'Successful!', 500); 
      } else {
      toast.warn('item already in cart !', 'Warnning!', 500); 
      }
   }

  return (
    <Container className='gy-5 py-4 my-md-0'>
        <Row xs={6} md={12} sm={12} className="mb-md-5 mb-sm-5 mb-xs-5 mb-5 pb-md-5 pb-sm-2 pb-xs-2 pb-4 py-4">
        <Col className='navigation text-center' xs={6} md={3} sm={4}>
            <ul>
              {  isLoading && 
             <CircularProgress className="d-flex" color="primary" style={{ width: '20%', height: '20%'}} />  
              }
             { !isLoading && <li style={{ fontSize : 'calc(10px + 0.7vmin)',}} className={catclicked === null  ? 'li_hover' : ''} 
                onClick={() => categoryClick(null, null)}>All</li> }  
               { categories.map((c, i) => (
                 <li style={{ fontSize : 'calc(10px + 0.4vmin)',}} className={catclicked === i+1  ? 'li_hover' : ''} 
                onClick={() => categoryClick(i+1, c)}>{c.name}</li>
                ))
              }
            </ul>
        </Col>
        <Col xs={6} md={9} sm={8} className="scroll">
          { (succeessLogin && !isLoading) && <CssAlert className="my-3" variant="filled" severity="success">you logged in successfully !</CssAlert>  }
           { isLoading &&
             <div style={{ width: "100%", minHeight: "100%" }} className="d-flex position-relative justify-content-center align-items-center">
             <CircularProgress className="position-relative" color="primary" style={{ width: '20%', height: '20%'}} /> 
             </div>  
           }
         { !isLoading && <Grid container spacing={5}>
        {  allItems?.map((p, index) => {
            if(index >= (page-1)*MAX_ITEMS && index<page*MAX_ITEMS)
          return ( <Grid item md={3} xs={8} sm={6}>
         <div className='white_card_pr'>
         <button onClick={() => addCart(p)}> <ShoppingCartIcon /> Add to cart </button>
         <div className='add_cart'>
         </div>
         <img className='position-relative' src={`sport_images/${p.image}`} alt="logo"/>
           <div className='position-absolute bottom-0 w-100 pb-2'>
           <div className='d-flex justify-content-between'>
              <span style={{ fontSize : 'calc(10px + 0.1vmin)',}}> {p.name} </span>
              <span style={{ fontSize : 'calc(10px + 0.1vmin)',}}> ${p.price}</span>
           </div>
           </div>
        </div>
         </Grid>
        )}
       )}
        <div className='justify-content-center w-50 bg-light mt-5 py-2'>
        <Pagination color="secondary" size="small" count={paginationCount} page={page} onChange={handleChange} />
        </div>
      </Grid>
        }
        </Col>
        </Row> 
    </Container>
  )
}

 export default Products;

 /*
 <Row className="position-relative">
            <ul style={{ width: "50%",}} className='d-flex justify-content-between'>
               <li><FacebookIcon /></li>
               <li><InstagramIcon />  </li>
               <li> <TwitterIcon /></li>
               <li> <YouTubeIcon /> </li>
            </ul>
        </Row>
        <Container style={{ fontSize : '1.3vw'}} className='position-relative text-center text-white'>
           <Row>
           <Col>
             <span> &copy; Sport Life 2022 </span> 
          </Col>
           </Row>
        </Container> 
*/