const router = require("express").Router();
const path = require("path");
const fs = require("fs");

router.get("/notes", (req, res) => {
    //TBD
    // console.log("READ notes");
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
        res.json(SON.parse(data));
     });
});

router.post("/notes", (req, res) => {
    //TBD
    console.log("CREATE notes");

    fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
    const data = JSON.parse(data);

    fs.writeFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {

    });
});

router.delete("/note/:id", (req,res) => {
    //TBD
    console.log("DELETE notes");
});

module.exports = router;