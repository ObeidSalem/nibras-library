import React,{ useState } from 'react'
import './Books.css'
import BookList from './BookList'

const Books = ({refFirebase, refReports, books, myFavorite, refUsers, users}) => {

    const user = users[0]
    const [Searchterm, SetSearchTerm] = useState("")

    return (
        <div className="body">
            <div className="search__container">
                <input className='search__bar' type="text" placeholder="Search . . . " onChange={(e) => {SetSearchTerm (e.target.value)}}/> 
                {/* <input className='search__buttons search__grid' type="button" ></input> 
                <input className='search__buttons search__list' type="button" ></input> 
                <input className='search__buttons search__filter' type="button"  onClick={(e) => {SetFilterbut (true)}} ></input>  */}
            </div>
            {/* <div >{show()}</div> */}
            <hr className="searchLine"></hr>

            <div className="books__container">
                <BookList 
                    user={user}
                    myFavorite={myFavorite}
                    refUsers={refUsers}
                    refReports={refReports} 
                    refFirebase = {refFirebase}
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
                        else if (value.category.toLocaleLowerCase().includes(Searchterm.toLocaleLowerCase())){
                            return value
                        }
                    })}

                        //     if(FilterCatNov == true){
                        //     //    SetSFilterCatNov (true => false)
                        //     FilterCatNov ? SetSFilterCatNov(false): SetSFilterCatNov(true)
                        //         console.log(FilterCatNov)

                        //         return(value.category.Novels)

                        // } else if (FilterCatStu == true){
                        //     // SetSFilterCatStu (false)
                        //     return(value.category.StudyMaterials)

                        // } else if (FilterCatOth == true){
                        //     // SetSFilterCatOth (false)
                        //     return(value.category.Others)

                        // }  else if (FilterCatX == true){
                        //     // useState({FilterCatX: false});
                        //     // onChange={(e) => {FilterCatX (false)}};
                        //     return value
                        // }          
                /> 
            </div>
        </div>
    )
}

export default Books
