var express = require("express");
var app = express();



let userObject = {
    name: "Mickey Mouse"

}

let book1 = {
    title: "I_am_a_book",
    author: "A_book",
    releaseDate: "February_23_2021"
}

let book2 = {
    title: "I_am_a_book_2",
    author: "A_book",
    releaseDate: "September_23_2067"
}

let book3 = {
    title: "I_am_a_book_3",
    author: "A_book",
    releaseDate: "July_12_4829"
}


let bookList = [book1, book2, book3]


// create first GET handler

app.get("/user", (req, res) => {
    res.json(userObject)
})

app.get("/books", (req, res) => {
    res.json(bookList)
})







app.listen(3000, () => {
 console.log("Server running on port 3000");
});
