const express = require("express");
const { validateAuth } = require("../config/auth");
const { generateToken } = require("../config/tokens");
const router = express.Router();
const User = require("../models/User");

// deberia ser un findOrCreate
/* router.post("/register", (req, res) => {
  User.create(req.body)
  .then((user) => {
    res.status(201).send(user);
  });
}); */

router.post("/register", (req, res) => {
  const { email } = req.body;
  User.findOrCreate({
    where: { email },
    defaults: req.body,
  }).then((user) => {
    res.status(201).send(user);
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);
    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);

      const payload = {
        email: user.email,
        name: user.name,
        lastname: user.lastname,
      };
      const token = generateToken(payload);
      res.cookie("token", token);
      res.send(payload);
    });
  });
});

/* router.post("/login", (req, res) => {
  res.send(req.user);
});
 */

router.get("/me", validateAuth, (req, res) => {
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
});

router.get("/", (req, res) => {
  User.findAll().then((user) => res.send(user));
});

module.exports = router;

// para probar crear users en thunderclient o Postman

/* 
{ 
    "name": "ferchu",
    "lastname": "Sanchez",
    "password": "fer",
    "email": "ferchuchan@gmail.com"
}

{ 
    "name": "fer",
    "password": "fer"
},
{ 
    "name": "fran",
    "password": "fran"
},
{ 
    "name": "jc",
    "password": "jc",
    "salt" : "ositomelosito"
}*/

/* 
  {
      "id": 1,
      "name": "fran",
      "lastname": null,
      "email": null,
      "password": "fran",
      "salt": null,
      "createdAt": "2022-08-11T18:24:26.459Z",
      "updatedAt": "2022-08-11T18:24:26.459Z"
  }
   */
