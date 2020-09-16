import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [list, setList] = useState(() => []);
  const [id, setId] = useState(() => "");
  const [error, setError] = useState(() => "");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          return setList(response.data);
        } else {
          return setList(new Array(response.data));
        }
      })
      .catch((error) => setError(error));
  }, [id]);

  return (
    <div>
      <div>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)}></input>
      </div>
      {list
        .filter((p) => {
          return p.id < 10;
        })
        .map((item) => {
          return (
            <div key={item.id}>
              <ul>
                <li>
                  {item.id} | <span style={{ color: "red" }}>{item.title}</span> | <i>{item.body}</i>
                </li>
              </ul>
            </div>
          );
        })}
      {error !== "" && <p>error</p>}
    </div>
  );
}

export default DataFetching;
