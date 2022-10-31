import React from "react";
import "./Cards.css"
import BookIcon from '@mui/icons-material/Book';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import FaceIcon from '@mui/icons-material/Face';
import HouseIcon from '@mui/icons-material/House';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'; 
import GOT from "./GOT.jpg"

export default function CardsForData({book,i}){
    return(
        <div className="flexContainer">
            <div className="container" key={i}>
                <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <img src={GOT} alt={book.avatar}/>
                            <h3>Book {book.name}<BookIcon/></h3>
                        </div>
                   </div>
                    <div className="face face2" key={i}>
                        <div className="content">
                            <h3 className="centering">Book {i+1}</h3>
                            {book.authors.map((author) => {
                                return (<p className="centering" key={author}>{author} {<FaceIcon/>}</p>)
                            })}
                            <p className="centering" key={book.numberOfPages}>{book.numberOfPages} {<LibraryBooksIcon/>}</p>
                            <p className="centering" key={book.country}>{book.country} {<HouseIcon/>}</p>
                            <p className="centering" key={book.released}>{new Date(book.released).toDateString()} {<CalendarMonthIcon/>}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )
}
