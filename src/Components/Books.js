import React,{ useState } from 'react'
import './Books.css'
import BookList from './BookList'

const Books = ({refReports, books}) => {

    



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
                <BookList 
                    books={books}
                    refReports={refReports} 
                />
            </div>

        </div>
    )
}

export default Books
