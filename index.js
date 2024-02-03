const express = require("express");
const app = express();
const port = 5000;

// middleware
var cors = require('cors')
app.use(cors())

const users = [
  { id: 1, name: "Kalia", email: "kalia@jalia.com" },
  { id: 1, name: "Jalia", email: "Jalia@lalia.com" },
  { id: 1, name: "Vulia", email: "Vulia@valia.com" },
];

app.get("/", (req, res) => {
  res.send("Hellooo");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log("server is running on", port);
});
