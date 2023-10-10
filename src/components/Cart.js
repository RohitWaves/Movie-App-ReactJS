import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../utility/Cartslice';
import { clearCart } from '../utility/Cartslice';
import { useEffect } from 'react';
//import Moviecard from './Moviecard';
//import Cart from './Cart';
import { useNavigate } from 'react-router-dom';


  const Cart = (props) => {

     const{resmovies} = props;

    const{img,title,rating,price,description} = resmovies || {};

     const movielist = useSelector((state) => state.cart.items)

     const dispatch = useDispatch();
   
     console.log(movielist,"movie")
    // console.log("cartItems", cartItems)
   
    const deleteItem = () => {
       dispatch(removeItem())
    }

    const clearItem = () => {
        dispatch(clearCart())
    }

    

    return (
        
        <div>
             <button onClick={() => clearItem()}>Clear Cart</button>
        {/*   <Moviecard resmovies={cartItems}/> */}
       
        {
       
          movielist.map((data) => {
            return (
             
              <div class="card">
              <img src={data?.img} class='movie-img' />
              <h3>{data?.title}</h3>
              <h3 class="rating">{data?.rating}</h3>
              <h3 class="price">{data?.price}</h3>
              <p class="description">{data?.description}</p>
              <button onClick={()=>deleteItem()}>Remove</button>
            </div>
            )
          })
        }

        {
          movielist.length === 0 && (
            <h1>Oopps....Cart is empty! Add item</h1>
          )
        }

           

        </div>
    )
}
export default Cart;