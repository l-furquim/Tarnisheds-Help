var express = require("express");
var router = express.Router();

var maculadoController = require("../controllers/maculadoController");

router.post("/cadastrar", function (req, res) {
    maculadoController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    maculadoController.autenticar(req, res);
});

module.exports = router;