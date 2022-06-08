import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";
// setup vars{
  const books = [
{  img: 
  "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth",
},
{
  img: 
  "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL200_SR200,200_.jpg",
  title:
    "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
  author: "James Clear",
},
{

    img: 
    "https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg",
    title:
      "If Animals Kissed Good Night",
    author: "Ann Whitford Paul",
  },


  ];
function Booklist() {
  return (
    <section className="booklist">
      {books.map((book)=>{
        const {img,title,author}=book;
        return (
          <Book book={book}></Book>
        )
      })}
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  const {img,title, author,} = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
       <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
