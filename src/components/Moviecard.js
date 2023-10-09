import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../utility/Cartslice';

 const Moviecard = (props) => {

     const{resmovies} = props;

     const{img,title,rating,price,description} = resmovies || {};

     
   
     console.log(resmovies);

      const dispatch = useDispatch()

      const handleAddItem = () => {

          dispatch(addItem(resmovies))
      }
   
    return (
         <div className='movie-card'>
            <img src={img} className='movie-img'/>
            <h3>{title}</h3>
            <h3>{rating}</h3>
            <h3>{price}</h3>
            <h3>{description}</h3>
            <button onClick={() => handleAddItem()}>Add+</button>
        </div>
    )
}

export default Moviecard;