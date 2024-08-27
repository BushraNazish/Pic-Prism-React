// This is the normal method
// const express = require("express")
// const router = express.Router()

const { login, signup, refresh, switchProfile } = require("../controllers/authController");
const { verifyToken } = require("../middlewares/verifyToken");

// Ye hai mentos zindagi
const router = require("express").Router();

router.post("/login", login);
router.post("/signup", signup);
router.get("/refresh", refresh);
router.get('/switch', verifyToken, switchProfile);

module.exports = router;