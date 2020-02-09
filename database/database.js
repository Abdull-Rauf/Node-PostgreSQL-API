const Pool = require('pg').Pool;

const conn = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 12345678,
  database: 'todo',
  port: 5432,

});


const getTodos = (req, res) => {

  conn.query('SELECT * FROM todos', (err, result) => {
    if (err) res.send({ error: err });
    res.json(result.rows)
    console.log(result.rows)
  })
}


module.exports = {
  getTodos
}