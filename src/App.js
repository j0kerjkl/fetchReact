import React from 'react';
import './App.css';
import Axios from "axios";
import{useEffect, useState} from "react";
import GOT from './components/GOT.jpg'


function App() {

  const [books,setBooks]=useState([]);

  const getBooks = () => {
    Axios.get("https://www.anapioficeandfire.com/api/books?pageSize=30")
    .then((res)=>{
      console.log(res);
        setBooks(res.data)
        console.log(res.data[0])
    });
  }
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };


  
  return (
    <div>
      <h1>Game of Thrones Books</h1>
      <h5>Fetch a list from an API and Display it!</h5>
      <div className="button-container-div">
        <button onClick={getBooks} className="ui secondary basic button">Fetch Data</button>
    </div>
    <div className='flexContainer'>
    {
      books &&
      books.map((book ,i)=>{
        return (
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={GOT} alt="Avatar" style={{width:"300px",height:"300px"}} />
              </div>
              <div class="flip-card-back">
                <h1>Book {i+1}</h1> 
                <h2 className="bookname">{book.name}</h2>
                     <p>{book.authors}</p>
                     <p>{book.numberOfPages}</p>
                     <p>{book.country}</p>
                <p>{book.released}</p>
              </div>
            </div>
          </div>
          // <div>
          //   <div className=''>
          //     <div className='one-book'>
          //       <img src={GOT} alt='Image' style={{width: 300,height:300}}></img> 
          //     </div>
          //     <div className='bookCards' key={book.name}>
          //           {[book.id,<h4  key={i}>Book {i+1}</h4>]}
          //           <h2 className="bookname">{book.name}</h2>
          //           <p>{book.authors}</p>
          //           <p>{book.numberOfPages}</p>
          //           <p>{book.country}</p>
          //           <p>{book.released}</p>
          //       </div>
      
          //   </div>
          // </div>
              )
          })
        }       
    </div>
    </div>
  );
}

export default App;
