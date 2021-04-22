import React from "react";
import PropTypes from "prop-types";

function Book({ author, description, discount, image, isbn, link, price, pubdate, publisher, title }) {
  return (
    <div className="movie">
      <img src={image} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h3 >{author}</h3>
        <h3 >{price}</h3>
        <h3 >{discount}</h3>
        <h3 >{pubdate}</h3>
        <h3 >{publisher}</h3>
        {/* <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul> */}
        <p className="movie__summary">{description}...</p>
        {/* <p className="movie__summary">{description.slice(0, 180)}...</p> */}
      </div>
    </div>
  );
}

// Book.propTypes = {
//   id: PropTypes.number.isRequired,
//   year: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   summary: PropTypes.string.isRequired,
//   poster: PropTypes.string.isRequired,
//   genres: PropTypes.arrayOf(PropTypes.string).isRequired
// };

export default Book;