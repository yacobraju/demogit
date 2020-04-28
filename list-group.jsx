
import React from "react";
const ListGroup = props => {
  return (
    <div className="mt-5 ml-3">
      <ul className="list-group">
        {props.genres.map(genre => (
          <li
            onClick={() => props.handleSelectedGenre(genre)}
            key={genre.id}
            className={
              genre.id === props.selectedGenre
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;