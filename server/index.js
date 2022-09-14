const express =require("express")
const app = express();
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'myDatabase',
})

app.post("/api/insert", (req, res)=>{

    const sqInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUE (?,?)"
    db.query(sqInsert, [movieName, movieReview], (err, result)=> {
        
    })
});

app.listen(3001, () => {
    console.log("running on port 3001");
})