"use strict";
(function () {
  const title = document.getElementById("title");
  title.innerHTML = localStorage.getItem("movieName");
  const year = document.getElementById("year");
  const runtime = document.getElementById("runtime");
  const rating = document.getElementById("rating");
  const poster = document.getElementById("poster");
  const plot = document.getElementById("plot");
  const directorsName = document.getElementById("director-names");
  const castName = document.getElementById("cast-names");
  const genre = document.getElementById("genre");

  fetchMovies(title.innerHTML);

  async function fetchMovies(search) {
    const url = `https://www.omdbapi.com/?t=${search}&type=movie&apikey=d19cd846`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      year.innerHTML = data.Year;
      runtime.innerHTML = data.Runtime;
      rating.innerHTML = `${data.imdbRating}/10`;
      poster.setAttribute("src", `${data.Poster}`);
      plot.innerHTML = data.Plot;
      directorsName.innerHTML = data.Director;
      castName.innerHTML = data.Actors;
      genre.innerHTML = data.Genre;
    } catch (err) {
      console.log(err);
    }
  }
})();
