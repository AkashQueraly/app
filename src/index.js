import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";
// setup vars
const author = "Amelia Hepworth";
const title = "I Love You to the Moon and Back";
const img =
  "https://images-eu.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX198_BO1,204,203,200_QL40_FMwebp_.jpg";
function Booklist() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    {console.log(props)}
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
