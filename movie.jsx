import React from "react";

const Movie = props => {
  return (
    <div>
      <div className="row shadow mb-3 mt-5">
        <div className="col-2 pl-0">
          <img src={props.movie.url}/>
        </div>
        <div className="col-2">
          <h4 className="text-primary">{props.movie.title}</h4>
          Price: ${props.movie.dailyRentalRate} | Genre: {props.movie.genre} |
          In Stock: {props.movie.numberInStock}
        </div>
      </div>
    </div>
  );
};

export default Movie;