import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
        <h1 className="text-2xl text-white pt-4 pl-8">{title}</h1>
    <div className=" pt-0 pl-4 flex overflow-x-scroll">
      
      <div className="flex">
      {/* <MovieCard title={movies[0].title} poster_path={movies[0].poster_path} />
      <MovieCard title={movies[1].title} poster_path={movies[1].poster_path} />
      <MovieCard title={movies[2].title} poster_path={movies[2].poster_path} />
      <MovieCard title={movies[3].title} poster_path={movies[3].poster_path} /> */}
        {movies?.map((movie) => (
          <MovieCard key={movie.id} title={movie.title} poster_path={movie.poster_path} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default MovieList;
