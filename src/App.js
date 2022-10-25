import React from "react";
import  Axios  from "axios";
import { useState } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import GOT from './components/GOT.jpg'
import BookIcon from '@mui/icons-material/Book';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import FaceIcon from '@mui/icons-material/Face';
import HouseIcon from '@mui/icons-material/House';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'; 
import "./components/App.css";

const App=()=> {

    const [books,setBooks]=useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const getBooks = () => {
        setIsLoading(true);
        Axios.get("https://www.anapioficeandfire.com/api/books?pageSize=30")
        .then((res)=>{
            setBooks(res.data)
            setIsLoading(false);
        });
      }

      const handlech = (e) => {
        const type = e.target.value
        if(type === "ASC") {
            setBooks([...books].sort((a,b) => {
                return b.released - a.released ? 1 : -1;
            }))
        } else if(type==="DSC"){
            setBooks([...books].sort((a,b) => {
                return a.released - b.released ? 1 : -1;
            }))
        }
      }

      return(
    <div>
      <h1>Game of Thrones Books</h1>
      <h5>Fetch a list from an API and Display it!</h5>
      <div className="button-container-div">
        <button onClick={getBooks} disabled={isLoading} className="ui secondary basic button">Fetch Data</button>
        <select onChange={handlech} className="dropdown">
            <option value="">Select Sorting Method</option>
            <option value="ASC" className="ui secondary basic button">New to Old</option>
            <option value="DSC" className="ui secondary basic button">Old to New</option>
        </select>
    </div>
      {isLoading ? <LoadingSpinner/> : false}
    <div className='flexContainer' >
    {
      books &&
      books.map((book ,i)=>{
        return (
          <div className="column" key={i}>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={GOT} alt="Avatar" style={{width:"300px",height:"300px"}} />
              </div>
              <div className="flip-card-back" key={i}>
                <h1 >Book {i+1}</h1> 
                <h2 className="bookname" key={book}>{book.name} &nbsp; <BookIcon/></h2>
                    <p> {book.authors}  &nbsp;{<FaceIcon/>}</p>
                    <p>{book.numberOfPages} &nbsp;{<LibraryBooksIcon/>}</p>
                    <p>{book.country} &nbsp; {<HouseIcon/>}</p>
                    <p>{new Date(book.released).toDateString()} &nbsp; {<CalendarMonthIcon/>}</p>
              </div>
            </div>
          </div>
        </div>       
              )
          })
        } 
    </div>
    </div>
      )
}
export default App;