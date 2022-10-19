import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../store/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, toggleAuth } = useContext(AuthContext);

  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const emailChange = (e) => {
    setLoginUser({ ...loginUser, email: e.target.value });
  };
  const passwordChange = (e) => {
    setLoginUser({ ...loginUser, password: e.target.value });
  };

  const submitChange = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/login", { ...loginUser })
      .then((user) => {
        // alert(`you successfully logged in to your account:  ${(user.data.name).toUpperCase()}`);
        toggleAuth(user.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <figure>Iniciar Sesion</figure>
      </div>
      <form onSubmit={submitChange}>
        <div>
          <div>
            <section>
              <div>
                <label>Email</label>
                <p>
                  <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={loginUser.email}
                    onChange={emailChange}
                  />
                </p>
              </div>

              <div>
                <label>Password</label>
                <p>
                  <input
                    className="input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={loginUser.password}
                    onChange={passwordChange}
                  />
                </p>
              </div>

              <div>
                <button>Login</button>
                <Link to="/">
                  <button>Cancel</button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
