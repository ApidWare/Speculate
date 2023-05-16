const express = require("express");
const app = express();

app.get("/api", (req, res)  => {
    res.json({"user": "theUser"});
})

app.listen(3001 || process.env.PORT);
