import React from 'react'

const BookList = ({books}) => {
    return (
        <>
            {books.map(book =>(
                <div className="book__container" key={book.id}>
                    <input className='book__report reportIcon' type="button" value=""></input> 
                    <img className="book__image" src={book.image}/>
                    <h5 className="left">{book.title}</h5>
                    <h6 className="left">
                    Category: {book.category}
                    </h6>
                    <h6 className="left">
                    Author: {book.author}
                    </h6>
                    <h6 className="left">
                    code: {book.code}
                    </h6>
                    {/* <p className="left">
                        {book.description}                        
                    </p> */}
                    <div className="book__buttons">
                        <input className='book__contact' type="button" value="Contact"></input> 
                        <input className='book__favorite InActiveFavorite' type="button" value=""></input> 
                    </div>
                </div>
            ))}
        </>
    )
}

export default BookList
