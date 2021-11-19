const { response } = require("express");
const { validationResult } = require("express-validator");

const crearUsuario = (req, res = response) => {
  // Leer los parametros del body en formato JSON{}
  const { name, email, pass } = req.body;
  console.log(req.body);
  return res.json({
    ok: true,
    msg: "Crear usuario /new",
  });
};

const loginUsuario = (req, res = response) => {
  // console.log(req.body);
  const { email, pass } = req.body;
  // console.log(email);
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
