import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("./views/"));

app.listen(port, ()=>{
    console.log(`Server started on port ${port}.`);
});

// Routes
app.get("/", (request, response)=>{
    response.render("index");
});