import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import App from '../Components/App';
import Book from "../Components/Book";
import { firestore } from "../Components/FirebaseConfig";

function Search() {
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);


    const getBooks = async () => {
        console.log(text);

        //const response = firestore.collection("Books").where('title', 'array-contains', text);
        const response = firestore.collection("Books").where('title', '>=', text).where('title', '<=', text+ '\uf8ff');

        //const response = firestore.collection("Books").where('title', '>=', '\uf8ff'+text).where('title', '<=','\uf8ff'+ text);
      //LIKE '공정' + '어떤문자'
      // LIKE '%공정'  
        // const response = firebase.firestore();
        const data = await response.get(); // get() vs snapshot() ?? 

        const newBooks = data.docs.map((book) => ({
            id: book.id,
            ...book.data()
        }))
        setBooks(newBooks);

        // data.docs.forEach((item) => {
        //   console.log(item.id, " => ", item.data());
        //   console.log(item.data().author, " => ", item.data().title);
        //   setBooks([...books, {id: item.id,key: item.id, author: item.data().author, title: item.data().title}]);
        // });

        // data.docs.map(book => {
        //     console.log(book.data());
        //     setBooks([...books, {author: book.data().author, title: book.data().title}]);
        // });

        // const data = await response.collection("books").get();
        
        //console.log(typeof data.docs);

        //console.log(data.docs.keys());
        //if ( typeof data.docs !== "undefined" && data.docs !== null) {
    
        //}
        console.log( books);
        setLoading(false);
        // data.docs.forEach((item) => {
        // console.log(item.id, " => ", item.data());
        // // if(item.id =="book-0001"){
        // //   firestore.collection("books").doc(item.id).update({
        // //     title : "test"
        // //   })
        // // }
        
        // setBooks(...books, item.data());
        // setLoading(false);
        // });


        //  firestore.collection("books").doc("book-0004").set({
        //    title: "당신 거기 있어줄래요"
        //    ,status : "보관중"
        
        
        //  });

        //  firestore.collection("books").doc("book-0003").set({
        //   title: "우리가 빛의 속도로 갈 수 없다면"
        //   ,status: "보관중"
        
        // });
        // firestore.collection("books").add({
        //   id: "book-0003"
        //   ,title: "12가지 인생의 법칙"
        //   ,author: "조던피터슨"
        // })  
        //firestore.collection("books").doc("BxqAluo09gsxrJ9Pzowy").delete();
        
    };

    const onChange = (e) => {
        setText(e.target.value);
        setLoading(true);
      };

    return (
        <div>
          <input onChange={onChange} value={text}  />
          <button onClick = {getBooks}>보유도서검색</button>
          <section className="container">
                {loading ? (
                <div className="loader">
                    <span className="loader__text">보유도서 검색.</span>
                </div>
                ) : (
                    <div className="movies">
                    {books.map(book => (
                      <Book
                        key           ={book.id}
                        id            ={book.id}
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

export default Search;