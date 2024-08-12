const express = require("express");

const router = express.Router();
const phoneService = require("../service/phoneService")


router.get("/", (req, res) => {
    res.render("phone/savePhone.html");
});

router.post("/", async (req, res) => {
    let data = req.body;
    let result = await phoneService.save(data);

    if (result == true) {
        res.render("phone/success.ejs", {data});
    } else {
        res.send(result);
    }
});

router.get("/list", async (req, res) => {
    let result = await phoneService.findAll();
    res.send(result);
});

module.exports = router;