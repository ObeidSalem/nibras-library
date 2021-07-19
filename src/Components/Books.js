import React from 'react'
import './Books.css'

const Books = () => {
    return (
        <div className="body">
            <div className="search__container">
               
                <input className='search__bar' type="text" placeholder="Search. . . "></input> 
                <input className='search__grid' type="button" ></input> 
                <input className='search__list' type="button" ></input> 
                <input className='search__filter' type="button" ></input> 
            </div>
            <hr className="searchLine"></hr>

        </div>
    )
}

export default Books
