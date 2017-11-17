'use strict';
//pre coded
const db = require("../config/db")
//added next
const sqlite3 = require('sqlite3').verbose()

//added class
class Question{
  constructor (id, question) {
    this.id = id;
    this.question = question;
  }
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
