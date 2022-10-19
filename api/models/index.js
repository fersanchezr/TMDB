//MODELO (SIEMPRE ESCRIBO LOS NOMBRES CON LETRA MAYUSCULA Y SINGULAR)---> ARCHIVO INDEX (AGRUPA TODOS LOS MODELOS QUE HAY)

//1. REQUIERO TODOS LOS MODELOS QUE HAY
const User = require('./User')
const Movie = require('./Movie')


//2. ASOCIACION/ RELACIONES DE LOS OBJETOS/MODELO DE MI DB --> hasMany/hasOne/ belongTo 
//Siempre tienen que ser dobles, en ambas direcciones
Movie.belongsToMany(User, {through: 'userId'})
User.hasMany(Movie)

//3. EXPORTO MODELOS PARA USARLOS EN MI PATH DE RUTAS

module.exports = {User, Movie}