import React from "react";
import _ from "lodash";
const Pagination = props => {
  console.log(props.totalMovies, props.pageSize);
  const noOfPages = Math.ceil(props.totalMovies / props.pageSize);
  console.log(noOfPages);
  console.log(_.range(1, 11));
  const pages = _.range(1, noOfPages + 1);
  console.log(pages);
  console.log(_.slice([10, 20, 30, 40], 0, 2));

  return (
    <div>
      <nav aria-label="...">
        <ul className="pagination pagination-lg justify-content-center">
          {pages.map(page => (
            <li
              className={
                props.selectedPage === page ? "page-item active" : "page-item"
              }
              onClick={() => props.handlePageSelect(page)}
              aria-current="page"
            >
              <span className="page-link">
                {page}
                <span className="sr-only">(current)</span>
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;