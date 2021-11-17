// Router permitirá dar de alta cada ruta con cada tipo de petición (validación)
const { Router } = require("express");
const {} = require("express-validator");

// Importando los controladores
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controllers/auth");

const router = Router();

// Crear un nuevo usuario
router.post("/new", crearUsuario);

// Login de usuario
router.post("/", loginUsuario);

// validar y revalidar token
router.get("/renew", revalidarToken);

module.exports = router;
