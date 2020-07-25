const express = require("express");
const bodyParser = require("body-parser");

let app = express();

let booksforloan = [];
let loanedbooks = []
let id = 100;

//Middlewares

app.use(bodyParser.json());

// library REST API

app.get("/api/booksforloan", function(req,res) {
    return res.status(200).json(booksforloan);
})

app.post("/api/booksforloan", function(req,res) {
    let book = {
        name:req.body.name,
        author:req.body.author,
        pages:req.body.pages,
        genre:req.body.genre,
        id:id
    }
    booksforloan.push(book);
    id++;
    return res.status(200).json({message:"success"});
}) 

app.get("/api/loanedbooks", function(req,res) {
    return res.status(200).json(loanedbooks);
})

app.put("/api/booksforloan/:id", function(req,res) {
    let id = parseInt(req.params.id,10);
    for(let i=0; i<booksforloan.length; i++) {
        if(booksforloan[i].id == id) {
            loanedbooks.push(booksforloan[i]);
            booksforloan.splice(i,1);
            return res.status(200).json({message: "transfer success"});
        }
    }
    return res.status(404).json({message:"not found"});
})

app.put("/api/loanedbooks/:id", function(req,res) {
    let id = parseInt(req.params.id,10);
    for(let i=0; i<loanedbooks.length; i++) {
        if(loanedbooks[i].id == id) {
            booksforloan.push(loanedbooks[i]);
            loanedbooks.splice(i,1);
            return res.status(200).json({message: "transfer success"});
        }
    }
    return res.status(404).json({message:"not found"});
})

app.delete("/api/booksforloan/:id", function(req,res) {
    let id = parseInt(req.params.id,10);
    for(let i=0; i<booksforloan.length; i++) {
        if(booksforloan[i].id == id) {
            booksforloan.splice(i,1);
            return res.status(200).json({message: "transfer success"});
        }
    }
    return res.status(404).json({message:"not found"});
})

app.listen(3001);

console.log("running in port 3001");