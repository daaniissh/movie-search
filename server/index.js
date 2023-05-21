const express = require("express");
const cors = require("cors");
const movieList = require("./movies.json");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.get("/api/movies", (req, res) => {
  const { movieName } = req.query;
  // console.log(movieName,"res");

  let filteredMovies = [];
  if (movieName) {
    filteredMovies = movieList.filter((movie) =>
      movie.title.toLowerCase().includes(movieName.toLowerCase())
    );
  } else {
    filteredMovies = movieList;
  }

  res.json({
    results: filteredMovies,
  });
});
app.post("/api/movies", (req, res) => {
  const { movieName } = req.body.data;
  // console.log(req.body.data,"error");
  if (movieName) {
    movieList.push({
      id: Date.now(),
      title: movieName,
      poster_path: "bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg",
    });
  }
  res.json({
    results: movieList,
  });
});
app.delete("/api/movies", (req, res) => {
  // console.log("delete");
  const { movieName } = req.body;
  console.log(req.body, "why");
  const filteredMovieList = movieList.filter(
    (movie) => movie.title.toLowerCase() !== movieName.toLowerCase() 
  );
  // console.log(filteredMovieList);
  res.json({
    results: filteredMovieList,
  });
});
app.listen(port, () => {
  console.log("started");
});
