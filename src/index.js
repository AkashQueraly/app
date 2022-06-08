import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";
// setup vars
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth",
};
const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL200_SR200,200_.jpg",
  title:
    "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
  author: "James Clear",
};

function Booklist() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, nisi
        explicabo at veritatis molestiae suscipit ducimus sunt reiciendis
        temporibus nihil reprehenderit voluptate dicta, ratione adipisci dolor.
        Fugiat distinctio quia iusto?
      </p>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  const {img,title, author} = props;
  console.log(props)
  return (
    <article className="book">
      <img src={img} alt="" />
       <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children} 
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
