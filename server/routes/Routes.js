const express = require("express");
const router = express.Router();
const Controller = require("../controllers/logController");

router.route("/log")
		.get(Controller.index)
		.post(Controller.create);

router.route("/log/:id")
		.put(Controller.update)
		.delete(Controller.delete);

module.exports = router;
