const express = require("express");
const path = require('path');

// use Port provided by heroku or if none provided use Port 3000
const PORT = process.env.PORT || 3000;

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// serve index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});