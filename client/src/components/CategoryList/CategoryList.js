import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
class CategoryList extends React.Component {
  render() {
    let arr = this.props.categoryList;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%"
        }}
      >
        <ListGroup bsPrefix="ListStyle">
          {arr.map(ind => (
            <ListGroup.Item
              style={{ width: "100%", display: "flex", alignItems: "center" }}
            >
              <p style={{ margin: "0px" }}>{ind.label}</p>
              <Button style={{ marginLeft: "auto" }} variant="danger">
                <FontAwesomeIcon icon={faTrashAlt} />
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default CategoryList;
