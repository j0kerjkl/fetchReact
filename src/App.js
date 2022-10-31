import React from "react";
import  Axios  from "axios";
import { useState } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import "./components/App.css";
import CardsForData from "./components/CardsForData";

const App=()=> {

    const [books,setBooks]=useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const getBooks = () => {
        setIsLoading(true);
        Axios.get("https://www.anapioficeandfire.com/api/books?pageSize=30")
        .then((res)=>{
          console.log(res.data)
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
        <button onClick={getBooks} disabled={isLoading} className="ui inverted button">Fetch Data</button>
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
      books?.map((book ,i)=>{
        return (
          <div className="column" key={i}>
            <CardsForData book={book} i={i} />
          </div>
              )
          })
        } 
    </div>
    </div>
      )
}
export default App;