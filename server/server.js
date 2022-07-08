const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("It's working!");
});

app.listen(4000, () => {
    console.log("App listening on port 4000");
});
