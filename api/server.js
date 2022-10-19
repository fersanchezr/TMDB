// Configuración del server

const express = require("express");
// const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const db = require("./config")
const app = express();
const routes = require("./routes");
const models= require("./models/index") // se puede requerir y ejecutar sin guardar en una variable
const movies =require('./controllers/requestMovies')

// app.use(cors()); // esta librería es para poder trabajar front con back en localhost
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use("/api", routes); //todas las rutas empiezan con api
// app.use("/", (req, res, next) => res.redirect("/api")); // me aseguro que si o si vaya para /api si entraste en otra ruta
// app.use(express.urlencoded({ extended: false }));

// get de prueba
/* app.get ('/', (req,res)=> {
console.log('Esto es HOLA')
res.send('HOLA')
}) */

/* app.listen(3001, () => {
  console.log("API on port 3001");
});
 */

db.sync({force: false}).then(()=>{
    app.listen(3001, () => {
      console.log("API on port 3001");
    });  
    })

