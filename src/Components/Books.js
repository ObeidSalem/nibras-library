import React,{ useState } from 'react'
import './Books.css'
import BookList from './BookList'

const Books = ({books}) => {

<<<<<<< HEAD
    const [books, setBooks] = useState([
        {id: 1, image: "/images/b1.jpg", title: "ABSALOM, ABSALOM! BY WILLIAM FAULKNER", author:"Obeid Salem", category: "Novel", code: "0001", description: "in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem who  in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem "},
        {id: 2, image: "/images/b2.jpeg", title: "ABSALOM, ABSALOM! BY WILLIAM FAULKNER", author:"Obeid Salem", category: "Novel", code: "0002", description: "in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem who  in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem "},
        {id: 3, image: "/images/b3.jpeg", title: "ABSALOM, ABSALOM! BY WILLIAM FAULKNER", author:"Obeid Salem", category: "Novel", code: "0003", description: "in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem who  in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem "},
        {id: 4, image: "/images/b1.jpg", title: "ABSALOM, ABSALOM! BY WILLIAM FAULKNER", author:"Obeid Salem", category: "Novel", code: "0004", description: "in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem who  in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem "},
        {id: 5, image: "/images/b2.jpeg", title: "ABSALOM, ABSALOM! BY WILLIAM FAULKNER", author:"Obeid Salem", category: "Novel", code: "0005", description: "in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem who  in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem "},
        {id: 6, image: "/images/b3.jpeg", title: "ABSALOM, ABSALOM! BY WILLIAM FAULKNER", author:"Obeid Salem", category: "Novel", code: "0006", description: "in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem who  in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem "},
        {id: 7, image: "/images/b1.jpg", title: "ABSALOM, ABSALOM! BY WILLIAM FAULKNER", author:"Obeid Salem", category: "Novel", code: "0007", description: "in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem who  in the Ecclesiastes, again part of the Old Testament. The anonymous author is a King of Jerusalem "},
        
    ]);
=======
    
>>>>>>> 31ca413f70cdff3ca577d00c83ade655ebc76610


    return (
        <div className="body">
            <div className="search__container">
                <input className='search__bar' type="text" placeholder="Search . . . "></input> 
                <input className='search__buttons search__grid' type="button" ></input> 
                <input className='search__buttons search__list' type="button" ></input> 
                <input className='search__buttons search__filter' type="button"  ></input> 
            </div>
            <hr className="searchLine"></hr>

            <div className="books__container">
                <BookList books={books}/>
            </div>

        </div>
    )
}

export default Books
