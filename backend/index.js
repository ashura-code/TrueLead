
const express =require('express');
const dotenv = require('dotenv');
const cors= require('cors');
dotenv.config();

// app.use(cors());

const app = express();
const port = process.env.PORT;
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});