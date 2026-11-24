require('dotenv').config();

const path = require('path');
const express = require('express');
const homeRoutes = require('./src/routes/homeRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', homeRoutes);

app.listen(PORT, () => {
  console.log(`Cestou rodando em http://localhost:${PORT}`);
});