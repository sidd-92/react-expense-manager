import React from "react";
import Pagination from "react-bootstrap/Pagination";
let PaginationComponent = ({ itemArray, active }) => (
  <Pagination>
    {itemArray.map(number => (
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    ))}
  </Pagination>
);
export default PaginationComponent;

/* 
const paginationBasic = (
  <div>
    <Pagination>{items}</Pagination>
    <br />

    <Pagination size="lg">{items}</Pagination>
    <br />

    <Pagination size="sm">{items}</Pagination>
  </div>
);
 */
