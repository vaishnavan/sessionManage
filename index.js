const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();

//middle
app.use(cookieParser());
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:"vaishnavan"
}))                                                                             

const movie = {
    movieName:"Mersal",
    actor:"vijay"
}

app.get('/login', (req, res) => {
    req.session.movie = movie;
    req.session.save();
    res.send("movie saved successfully");
})

app.get('/movie', (req, res) =>{
    res.send(req.session.movie)
})

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.send("movie successfully destoryed")
})

app.listen((5000), () => {
    console.log("server connected")
})