let express = require('express');

let router = express.Router();

router.post("/register", (req, res) => {
    res.send("register page called");
});

router.post("/login", (req, res) => {
    res.send("login page called");
});

router.get("/viewemployees", (req, res) => {
    res.send("view employees page called");
});

router.get("/viewtasks", (req, res) => {
    res.send("view task page called");
});

router.get("/viewtodo", (req, res) => {
    res.send("view todo page called");
});

router.put("/updateprofile", (req, res) => {
    res.send("update profile page called");
});

module.exports = router;