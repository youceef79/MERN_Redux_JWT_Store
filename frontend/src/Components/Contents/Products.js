import React from 'react'
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
import './Products.css'
import { NotificationManager } from 'react-notifications';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cartIncrement } from '../../actions/cartActions';
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CheckIcon from '@mui/icons-material/Check';
import { addToCart } from '../../reducers/cartReducer'
import { getAllProducts, getAllCategories, getProductsByCat } from '../../reducers/productReducer'

function Products() {
   

   const { product_items, product_items_by_cat, categories, isLoading } = useSelector(
    (state) => state.product
  )
   const { cart_items } = useSelector(
    (state) => state.cart
  )


   const dispatch = useDispatch()
   const [page, setPage] = React.useState(1);
   const [catclicked, setCatclicked] = React.useState(null);
   const [spinclicked, setSpinclicked] = React.useState(-1);
   const [loading, setLoading] = React.useState(false);
   const [lists, setLists] = React.useState([]);
   const timer = React.useRef();
   const allItems = () => {
        return catclicked == null ? product_items : product_items_by_cat; 
  }
  const MAX_ITEMS = 8
  const paginationCount = Math.ceil(allItems().length / MAX_ITEMS)

   React.useEffect(() => {
       dispatch(getAllProducts())
       dispatch(getAllCategories())
    }, []);


   React.useEffect(() => {
      return () => {
        clearTimeout(timer.current);
      };
    }, []);
  
   
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
      /*if (!loading) {
         timer.current = window.setTimeout(() => {
           setLoading(false);
           setSpinclicked(null)
         }, 5000);
       }*/
       let item = {
           product: p._id,
           quantity: "25"
       }
      dispatch(addToCart({ item }))
      toast.success('item added to cart !', 'Successful!', 2000);
   }

  return (
    <Container className='gy-5 py-4 my-md-0'>
        <Row className="mb-md-5 mb-sm-5 mb-xs-5 mb-5 pb-md-5 pb-sm-2 pb-xs-2 pb-4 py-4">
        <Col className='navigation' xs={3}>
            <ul>
              {  isLoading && 
             <CircularProgress className="d-flex" color="primary" style={{ width: '20%', height: '20%'}} />  
              }
             { !isLoading && <li className={catclicked === null  ? 'li_hover' : ''} 
                onClick={() => categoryClick(null, null)}>All</li> }  
               { categories.map((c, i) => (
                 <li className={catclicked === i+1  ? 'li_hover' : ''} 
                onClick={() => categoryClick(i+1, c)}>{c.name}</li>
                ))
              }
            </ul>
        </Col>
        <Col xs={9}>
         { isLoading && 
             <CircularProgress className="d-flex" color="primary" style={{ width: '20%', height: '20%'}} />  
           }
         { !isLoading && <Grid container spacing={5}>
        {  allItems()?.map((p, index) => {
            if(index >= (page-1)*MAX_ITEMS && index<page*MAX_ITEMS)
          return ( <Grid item xs={3}>
         <div className='white_card_pr'>
         <button onClick={() => addCart(p)}> <ShoppingCartIcon /> Add to cart </button>
         <div className='add_cart'>
         </div>
         <img className='position-relative' src={`sport_images/${p.image}`} alt="logo"/>
           <div className='position-absolute bottom-0 w-100 pb-2'>
           <div className='d-flex justify-content-between'>
              <span style={{ fontSize : '0.7vw',}}> {p.name} </span>
              <span style={{ fontSize : '0.8vw',}}> ${p.price}</span>
           </div>
           </div>
        </div>
         </Grid>
        )}
       )}
      </Grid> }
       {  !isLoading && 
        <div className='justify-content-center w-50 bg-light mt-md-5 mt-0 py-2 px-0'>
        <Pagination color="secondary" size="small" count={paginationCount} page={page} onChange={handleChange} />
        </div>
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
        </Container> */