const express = require("express");
const app = express();

app.use((require("body-parser")());

app.post('/fullstory', (req, res) => {
    console.log("Fullname: " + req.body.Fullname);
    console.log("Email: " + req.body.Email);
    console.log("Location: " + req.body.Location);
    res.redirect(303, '/success');
})

app.post('/fullstory', (req, res) => {
    if(req.xhr || req.accepts('json,html')==='json'){
        // handle errors if any
        res.send({ success: true });
    } else {
        // handle errors if any
        res.redirect(303, '/success');
    }
})
