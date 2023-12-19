import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {directors.map((director, index)=>(
      <div key={index}>
      <h1>{director.name}</h1>
      <ul>
        {director.movies.map((movie, movieIndex)=>(
          <li key={movieIndex}>
           {movie}
          </li>
        ))}
      </ul>
      </div>
    ))}
  </div>;
}

export default Directors;
