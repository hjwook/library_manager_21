import React from 'react';
import {useState} from 'react';
import axios from "axios";
import ReactDOM from 'react-dom';
import App from '../Components/App';
import Book from "../Components/Book";

function SearchNaver() {
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);


    const getBooks = async () => {
        
        // const books = await axios.get(
        
        //   "https://openapi.naver.com/v1/search/book.json"
        // );
        const ID_KEY = 'BMCTchHfvRVggjSwRz1b';
        const SECRET_KEY = 'Ju9FdOu9F8'; 
        const search = text;
        
        const url = process.env.NODE_ENV === 'development' ? '/' : 'https://openapi.naver.com/';
    
        const searchBooks = await axios.get(
            //'https://openapi.naver.com/v1/search/book.json'
            url+'v1/search/book.json'
            //url+'v1/search/book_adv.xml'
            ,{
                params:{
                    query: search
                    //,d_titl : search
                    //,display: 20
                } 
                ,headers: {
                     'X-Naver-Client-Id': ID_KEY
                    ,'X-Naver-Client-Secret': SECRET_KEY
                    ,'Access-Control-Allow-Origin' : "https://openapi.naver.com/"
                }
            }
        )
        // searchBooks.data.items.forEach((item) => {
        //     console.log(item);
        //                 // if(item.id =="book-0001"){
        //     //   firestore.collection("books").doc(item.id).update({
        //     //     title : "test"
        //     //   })
        //     // }
            
        //     setBooks([...books, item]);
        //   });
        //console.log(searchBooks.data);
        if(loading){
            console.log("업데이트");
            setBooks(...books, searchBooks.data.items);
        } 
        setLoading(false);
        //console.log(searchBooks.data.items);
        //setBooks(searchBooks);
        console.log(searchBooks.data.items);
    };

    const onChange = (e) => {
        setText(e.target.value);
        setLoading(true);
      };

    return (
        <div>
          <input onChange={onChange} value={text}  />
          <button onClick = {getBooks}>검색</button>
          <section className="container">
                {loading ? (
                <div className="loader">
                    <span className="loader__text">검색하세요.</span>
                </div>
                ) : (
                   
                      <div className="movies">
                      
                      {books.map(book => (
                        <Book
                          key={book.isbn}
                          id={book.isbn}
                          author        = {book.author} 
                          description   = {book.description}
                          discount      = {book.discount}
                          image         = {book.image}
                          isbn          = {book.isbn}
                          link          = {book.link}
                          price         = {book.price}
                          pubdate       = {book.pubdate}
                          publisher     = {book.publisher}
                          title         = {book.title}
                        />
                      ))}
                    </div>
                    
                )}
            </section>
           {/* <div className="movies">
            {books.data.map(book => (
              <Book
                key={book.id}
                id={book.id}
                author        = {book.author} 
                description   = {book.description}
                discount      = {book.discount}
                image         = {book.image}
                isbn          = {book.isbn}
                link          = {book.link}
                price         = {book.price}
                pubdate       = {book.pubdate}
                publisher     = {book.publisher}
                title         = {book.title}
              />
            ))}
          </div>  */}
        </div>
    );
}

export default SearchNaver;