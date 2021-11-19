// Router permitirá dar de alta cada ruta con cada tipo de petición (validación)
const { Router } = require("express");
const { check } = require("express-validator");

// Importando los controladores
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controllers/auth");

const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

// Crear un nuevo usuario
router.post(
  "/new",
  [
    check("name", "El nombre es obligatorio").notEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("pass", "El password es obligatorio").isLength({ min: 6 }),
    validarCampos,
  ],
  crearUsuario
);

// Login de usuario
router.post(
  "/",
  [
    // Middleware antes de llegar al controlador (loginUsuario)
    check("email", "El email es obligatorio").isEmail(),
    check("pass", "El password es obligatorio").isLength({ min: 6 }),
    validarCampos,
  ],
  loginUsuario
);

// validar y revalidar token
router.get("/renew", revalidarToken);

module.exports = router;
