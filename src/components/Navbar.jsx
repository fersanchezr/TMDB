import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

const Navbar = ({ handleSearchMovie, handleMovie, movieName }) => {
  const { isAuthenticated, user, toggleAuth } = useContext(AuthContext);

  const logout = (e) => {
    e.preventDefault();
    axios.post('/api/users/logout',{}).then((res) =>res.data);
    toggleAuth(null);
  };

  return (
    <nav>
      <Link to="/">
        <h1 className="colorAqua">The Movie Database</h1>
      </Link>
        <p className="colorAqua centerParraf"> {isAuthenticated ? `Welcome ${user.name.toUpperCase()}!` : ""}</p>
      <div>
        <form onSubmit={handleSearchMovie}>
            <input type="text" value={movieName} onChange={handleMovie} />
            <button>Search Movie</button>
        </form>
      </div>
      <div>
      <Link to="/bill">
          <button>Billboard</button>
        </Link>
      </div>
      <div>
      
        {!isAuthenticated ? (
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        ) : (
          <Link to={"/"}>
            <button onClick={logout}>Logout</button>
          </Link>
        )}
        {/* probar otra forma el logueo */}
         {/* < Link to= {isAuthenticated ? "/" : "/login"}>
          <button onClick={logout}>
            {isAuthenticated
          ? `Logout`
          : "Login"}
          </button>
          </Link> */}

        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
