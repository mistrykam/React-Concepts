import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loaded: false,
  error: "",
  post: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loaded: true,
        post: action.payload,
        error: ""
      };

    case "FETCH_ERROR":
      return {
        loaded: false,
        post: {},
        error: "Something went wrong"
      };

    default:
      return state;
  }
};

function HookReducerApi() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        console.log(response);
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <div className="container">
      <h3>API</h3>
      <div>{state.loaded ? <div>{state.post.title}</div> : ""}</div>
      <div>{state.error !== "" ? <div>{state.error}</div> : ""}</div>
    </div>
  );
}

export default HookReducerApi;
