const dotenv = require('dotenv');
dotenv.config();
//or dotenv =require('dotenv').config()

const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 4000;
const app = express();

console.log('web 36 rocks');
console.log(__dirname);
console.log(process.env.HAPPY);
console.log(process.env.ALWAYS);
console.log(process.env.PORT);
console.log(process.env.LADY);
console.log(process.env.FOO);

app.use(express.json());
app.use(cors());
app.use(`/api/*`, (__, res) => {
  res.json({ data: 'web 36 rocks' });
});
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
