const express = require('express');
const { response } = require('express');
const app = express();

app.get("/", function(request, response) {
    //console.log(request);
    response.send('<h1>Hello world!</h1>')

});

app.get("/about", function(req, res) {
    res.send('<h1>Tere about leht</h1>')

});

app.get("/contact", function(req, res) {
    res.send('<h1>Sisesta oma info</h1>')
    res.send('<p>email- email@mail.com</p>')

});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
}); 