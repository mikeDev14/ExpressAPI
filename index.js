const express = require("express");
const cors = require("cors");
require("dotenv").config();

console.log(process.env);

// Crear app de express
const app = express();

//Directorio publico
app.use(express.static("public"));

// CORS -> Software que permite interconectividad entre componentes (software)
app.use(cors());

// LEctura y parseo del body
app.use(express.json());

// Rutas
app.use("/api/auth", require("./routes/auth"));

// Levatar la app de express
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
