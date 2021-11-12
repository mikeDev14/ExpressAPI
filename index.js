const express = require("express");
const cors = require("cors");

// Crear app de express

const app = express();

app.get("/", (req, res) => {
  console.log("peticion en /");
  res.status(404).json({
    state: true,
    msg: "Todo bien ",
    id: 31.1416,
  });
});

// Levatar la app de express
app.listen(4000, () => {
  console.log(`Servidor corriendo en puerto ${4000}`);
});
