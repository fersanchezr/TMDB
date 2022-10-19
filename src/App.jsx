import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Grid from "./commons/Grid";
import Navbar from "./components/Navbar";
import { Routes, Route, useNavigate } from "react-router";
// import { Link } from "react-router-dom";
import SearchMovies from "./components/SearchMovies";
import Register from "./components/Register";
import Cards from "./commons/Cards";
import Login from "./components/Login";
import Bill from "./components/Bill";
import { AuthContext } from "./store/AuthContext";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [searchMovie, setsearchMovie] = useState([]);
  const [bill, setBill] = useState([]);
  const navigate = useNavigate();
  const{toggleAuth} = useContext(AuthContext)

  useEffect(() => {
    axios.get("/api/users/me").then((res) => toggleAuth(res.data));
  }, []);

  useEffect(() => {
    axios.get("/api/movies/popular").then((res) => setMovies(res.data));
  }, []);

  useEffect(() => {
    axios.get("/api/movies").then((res) => setBill(res.data));
  }, []);

  const handleMovie = (e) => {
    setMovieName(e.target.value);
  };

  const handleSearchMovie = (e) => {
    e.preventDefault();
    axios
      .get(`/api/movies/search/${movieName}`)
      .then((res) => setsearchMovie(res.data));
    if (movieName) navigate("/search");
    setMovieName("");
  };

  return (
    <>
      <Navbar handleMovie={handleMovie} handleSearchMovie={handleSearchMovie} movieName={movieName}/>
      <Routes>
        <Route path="/" element={<Grid movies={movies} />} />
        <Route path="/search" element={<SearchMovies searchMovie={searchMovie} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:movie/:id" element={<Cards />} />
        <Route path="/search/:id" element={<Cards />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bill" element={<Bill bill={bill} />} />
      </Routes>
    </>
  );
};

export default App;
