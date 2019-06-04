# Datasources

This directory contains config for datasources used by this app.

// {
//   "name": "db",
//   "connector": "memory",
//   "localStorage": "",
//   "file": "./data/db.json"
// }
{
  "name": "db",
  "connector": "mongodb",
  "url": "mongodb://localhost:27017/todo",
  "host": "localhost",
  "port": 27017,
 // "user": "lb4",
  //"password": "lb4",
  "database": "todo"
}