const router = require("express").Router();
const store = require("./../db/store");

router.get("/notes", (req, res) => {

    // Read Notes

    store.getNotes().then((notes) => {
        res.json(notes);

    });
});

router.post("/notes", (req, res) => {
    // console.log("CREATE notes");
    store.addNote(req.body).then((note) => {
        res.json(note);
    });
});

router.delete("/note/:id", (req, res) => {
    //TBD
    console.log("DELETE notes");
});

module.exports = router;