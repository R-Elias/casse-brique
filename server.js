const http = require("http")
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")


const app = express()

/** Connect to the database */
//const dbURI = "mongodb+srv://elias:lineberty@cluster0.6jb066s.mongodb.net/casse-brique?retryWrites=true&w=majority"
const dbURL = "mongodb://127.0.0.1/casse-brique"


mongoose.connect(dbURL)
    .then((result) => app.listen(8080, function(){
        console.log("Server is running on port 8080")
    }))
    .catch((err) => console.log(err))


app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use( function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Headers', "*")
    next()
})

app.use(express.static('public'))

app.get("/", function(req, res){
    res.header('Content-Type', 'text/html')
    res.status(200).sendFile(__dirname+"public/index.html")
})


/** User requests */
    app.use("/user",require("./routes/user"))


/** Score requests */
    // Recieves the score info from the client (score, user, lives, date)
    app.use("/score",require("./routes/score"))

/** Config requests*/
    // Sends the asked config to the client.
    app.use("/config",require("./routes/config"))
