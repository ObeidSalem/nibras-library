import React,{ useState } from 'react'
import './Books.css'
import BookList from './BookList'




const Books = ({books}) => {


 const [Searchterm, SetSearchTerm] = useState("")
 const [FilterCatNov, SetSFilterCatNov] = useState(false)
 const [FilterCatStu, SetSFilterCatStu] = useState(false)
 const [FilterCatOth, SetSFilterCatOth] = useState(false)
 const [FilterCatX, SetSFilterCatX] = useState(false)
 const [Filterbut, SetFilterbut] = useState(false)


//  function Elements() {
     
//   const x = (
      
//       <div >
//      <button className="button___filter" onClick={(e) => {SetSFilterCatNov (true)}}>Novels</button>
//      <button className="button___filter"onClick={(e) => {SetSFilterCatStu (true)}}>Study Materials</button>
//      <button className="button___filter"onClick={(e) => {SetSFilterCatOth (true)}}>Others</button>
//      <br />
//      <button className="button___xfilter" onClick={(e) => {SetSFilterCatX (true)}}>X</button>
//   </div>
//   )
//      return x
     
//  }


     
//        function show(){

//         if(Filterbut== true){
//             return Elements()
//         }else if(FilterCatX == true) {
//             return
//         }
//     }

       




    return (
        <div className="body">
            <div className="search__container">
                <input className='search__bar' type="text" placeholder="Search . . . " onChange={(e) => {SetSearchTerm (e.target.value)}}/> 
                <input className='search__buttons search__grid' type="button" ></input> 
                <input className='search__buttons search__list' type="button" ></input> 
                <input className='search__buttons search__filter' type="button"  onClick={(e) => {SetFilterbut (true)}} ></input> 
            </div>
            {/* <div >{show()}</div> */}
            <hr className="searchLine"></hr>

            <div className="books__container">
            <BookList books={books.filter(value => {


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
                        }
                        ) 
                        
                        }
                           /> 
   
          
            

            </div>

        </div>
    )
}

export default Books
