const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
// serve the public directory as a static content here

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
