import React,{ useState } from 'react'
import './Books.css'
import BookList from './BookList'

const Books = ({refReports, books}) => {

 const [Searchterm, SetSearchTerm] = useState("")

    return (
        <div className="body">
            <div className="search__container">
                <input className='search__bar' type="text" placeholder="Search . . . " onChange={(e) => {SetSearchTerm (e.target.value)}}/> 
                <input className='search__buttons search__grid' type="button" ></input> 
                <input className='search__buttons search__list' type="button" ></input> 
                <input className='search__buttons search__filter' type="button"  ></input> 
            </div>
            <hr className="searchLine"></hr>

            <div className="books__container">
                <BookList                              
                    refReports={refReports} 
                    books={books.filter(value => {
                           
                        if ( Searchterm ==""){
                            return value

                        } else if (value.title.toLocaleLowerCase().includes(Searchterm.toLocaleLowerCase())){
                            return value
                        }
                        else if (value.author.toLocaleLowerCase().includes(Searchterm.toLocaleLowerCase())){
                            return value
                        }
                        else if (value.owner.toLocaleLowerCase().includes(Searchterm.toLocaleLowerCase())){
                            return value
                        }
                    })}
                /> 
            </div>
        </div>
    )
}

export default Books
