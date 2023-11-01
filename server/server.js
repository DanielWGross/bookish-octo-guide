const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "../client/dist")));

  app.get("/", (_, res) => res.sendFile(path.join(__dirname, "../client/dist/index.html")));
}


app.get("/graphql", (_, res) => res.json("how greg"));

app.listen(PORT, () => console.log(`Application is running on ${PORT}`));