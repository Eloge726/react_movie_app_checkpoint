import React, { useState } from 'react';
import MovieCard from './MovieCard';
import {Form,Col,Row} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
const MovieList = (props) => {
    const [search, setSearch]=useState('')
    const [star,setStar]=useState(0)
    const handleSearch=(e)=>{
            e.preventDefault()
            setSearch(e.target.value) 

    }
    const ratingChanged = (newRating) => {
      setStar(newRating)  
      };
    return ( <div>
        <Row>
        <Col>
         <Form.Control size="lg" type="text" placeholder="Chercher un film" width='300px' onInput={handleSearch}/>
         </Col>
         <Col>
         <ReactStars
     count={5}
     onChange={ratingChanged}
     size={24}
     activeColor="#ffd700"
    />
         </Col>
         </Row>
         <div style={{display:"flex",justifyContent:"space-around"}}>
        {props.movie.filter(el=>el.titre.toUpperCase().includes(search.toUpperCase())).filter(el=>el.rate>=star).map(el=><MovieCard titre ={el.titre} image={el.image} rate={el.rate}/>)}
        </div>
    </div>  );
}
 
export default MovieList;