const { userLogin, userRegister } = require("../controllers/auth");

const router = require("express").Router();

router.post("/login", userLogin);
router.post("/register", userRegister);

module.exports = router;
