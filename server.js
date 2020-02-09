const express = require('express');
const app = express();
const port = 5100;
const db = require('./database/database')





app.get('/', (req, res) => {
  res.json({ message: 'Response Received' });
  console.log('object')
})
app.get('/find/todos', db.getTodos)







app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})  