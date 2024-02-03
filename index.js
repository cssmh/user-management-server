const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

// middleware
app.use(cors());
app.use(express.json())

const users = [
  { id: 1, name: "Kalia", email: "kalia@jalia.com" },
  { id: 2, name: "Jalia", email: "Jalia@lalia.com" },
  { id: 3, name: "Vulia", email: "Vulia@valia.com" },
];

app.get("/", (req, res) => {
  res.send("Hellooo");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
    console.log("post api hitting");
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(newUser)
})

app.listen(port, () => {
  console.log("server is running on", port);
});
