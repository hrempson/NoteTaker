const fs = require("fs");
const util = require("util");
const path = require("path");

const readFileAsync = util.promisify(fs.readFile);

class Store {

    read() {
        return readFileAsync( path.join( __dirname, "../db/db.json"), "utf8");
    }

    getNotes() {
        return this.read().then((data) => {
            return data 
            ? JSON.parse(data)
            : [];
        });
    };

    addNote() {
     return this.getNotes().then((notes) => {
         res.end();
     });
    };

    deleteNote() {

    };
}

module.exports = new Store;