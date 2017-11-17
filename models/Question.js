'use strict';

const db = require("../config/db")

class Question{
  static function CreateTable() {
    const sql = `
      CREATE TABLE IF NOT EXISTS questions (
        id INTEGER PRIMARY KEY,
        question TEXT,
      )
    `
    console.log("Preparing to create Table questions...");

    return new Promise(function(resolve){
      db.run(sql, function(){
        console.log("..users table created!");
        resolve("success");
      })
    })
  }
}


module.exports = Question;
