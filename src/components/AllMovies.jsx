import React from "react";
import Movie from "./Movie";

const AllMovies = ({ data }) => {
  console.log("DATA:", data);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
      {data.map((item) => (
        <Movie item={item} key={item.id} />
      ))}
    </div>
  );
};

export default AllMovies;
