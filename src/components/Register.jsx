import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name:'', 
    lastname:'',
    password:'',
    email:'',
  });

  const nameChange = (e) => {
    setUser({...user, name: e.target.value});
  };
  const lastNameChange = (e) => {
    setUser({...user, lastname: e.target.value});
  };
  const passwordChange = (e) => {
    setUser({...user, password: e.target.value});
  };
  const emailChange = (e) => {
    setUser({...user, email: e.target.value});
  };

  const submitChange = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/register", {...user})
      .then(() =>{navigate('/login')})
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={submitChange}>
      <div>
        <div>
          <br />
          <section>
            <div>
              {/* <label>Name</label> */}
                <input
                  className="input"
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={user.name}
                  onChange={nameChange}
                  required
                />
            </div>
            <div>
              {/* <label>LastName</label> */}
              <input
                className="input"
                type="text"
                name="lastName"
                placeholder="Lastname"
                value={user.lastname}
                onChange={lastNameChange}
                required
              />
            </div>
            <div>
              {/* <label>Email</label> */}
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={emailChange}
                required
              />
            </div>
            <div>
              {/* <label>Password</label> */}
                <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={passwordChange}
                  required
                />
            </div>
            <div>
              <button>Register</button>
              <Link to="/">
                <button>Cancel</button>
            </Link> 
            </div>
          </section>
        </div>
      </div>
    </form>
  );
};

export default Register;