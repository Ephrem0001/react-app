import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  let item = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  return (
    <>
      <h1>List</h1>
      {item.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {item.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(event) => console.log(BlobEvent)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
