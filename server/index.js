const express =require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql')


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'myDatabase',
})


app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/get', (req,res)=>{
    const sqSelect = "SELECT * FROM movie_reviews";
    db.query(sqInsert, (err, result)=> {
        res.send(result);
    });
})

app.post("/api/insert", (req, res)=>{

    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;

    const sqInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUE (?,?)"
    db.query(sqInsert, [movieName, movieReview], (err, result)=> {
        console.log(result)
    });
});

app.delete('/api/delete/:movieName', (req, res)=>{
    const name = req.params.movieName
    const sqlDelete = "DELETE FROM movie_reviews WHERE movieName = ?";

    db.query(sqlDelete,name, (err, result)=>{
        if(err) console.log(err);
    });
});

app.put('/api/update', (req, res)=>{
    const name = req.body.movieName;
    const review = req.body.movieReview;
    const sqlUpdate = "UPDATE movie_reviews SET movieReview = ? WHERE movieName = ?";

    db.query(sqlUpdate,[review, name], (err, result)=>{
        if(err) console.log(err);
    });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});