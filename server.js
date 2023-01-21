const express = require("express")
const app = express();

app.use("/public", express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("index");
})

app.listen(3000)