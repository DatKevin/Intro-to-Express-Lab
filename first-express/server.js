//Require modules
let express = require("express")
let path = require("path")
let pokemonDB = require("./data/pokemon-db.js")

//Create express 
let app = express()

//Configure App
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

//Mount middleware

//Mount routes
app.get("/", (request,response) => {
	response.redirect("/home")
})

app.get("/home", (request,response) => {
	response.render("home")
})

app.get("/pokemon", (request,response) => {
	response.render("./views/pokemon/index", {
		pokemon: pokemonDB.getAll()
	})
})

//Telling App to listen
app.listen(9000,() => {
	console.log("I'm listeningggg uwu")
})

