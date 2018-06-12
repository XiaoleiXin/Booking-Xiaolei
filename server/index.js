const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();
const PORT = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/room/:id', express.static(__dirname + '/../public'));

app.get('/dates/:id', (req, res) => {
  const { id } = req.params;
  db.getBookedDates(id).then((data) => { res.send(data); })
    .catch(err => console.log('err from book', err));
});

app.get('/info/:id', (req, res) => {
  const { id } = req.params;
  db.getPriceInfo(id).then(data => res.send(data))
    .catch(err => console.log('err from book', err));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
