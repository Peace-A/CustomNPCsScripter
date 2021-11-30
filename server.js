const express = require("express")
const cors = require("cors")
const app = express()
const fs = require("fs")

app.use("/assets",express.static("assets"))
app.use("/hint",express.static("hint"))
app.use("/bin",express.static("dist/bin"))

app.get("/", (req, res) => res.sendfile("./index.html") )
app.get("/index.js", (req, res) => res.sendfile("./index.js") )
app.get("/index.js.LICENSE", (req, res) => res.sendfile("./index.js.LICENSE") )
app.get("/package.json",cors(), (req, res) => res.sendfile("./package.json"))
app.get("/download", (req, res) => res.sendfile("./download.html") )

app.listen(process.env.PORT, ()=>console.log("Server started!"))
