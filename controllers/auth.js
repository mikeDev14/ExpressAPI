const { response } = require("express");
const { validationResult } = require("express-validator");

const crearUsuario = (req, res = response) => {
  console.log("Ya funcionó");
  return res.json({
    ok: true,
    msg: "Crear usuario /new",
  });
};

const loginUsuario = (req, res = response) => {
  return res.json({
    ok: true,
    msg: "Login de usuario",
  });
};

const revalidarToken = (req, res = response) => {
  return res.json({
    ok: true,
    msg: "Renew",
  });
};

// Exportando controladores para usar desde routes
module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};
