const express = require('express');
const app = express();
const mainRoutes = require('./routes/main');
const animationRoutes = require('./routes/animation');
const configure = require('./configure')(app);

app.use(express.static(__dirname + '/public'));
app.use(mainRoutes);
app.use(animationRoutes);

app.listen(3000, function (err) {
  if (err) throw err;
  console.log("Hello 3000")
})