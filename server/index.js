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

app.post('/dates/:id', (req, res) => {
  const { id } = req.params;
  const { date } = req.body;
  let total = 0;
  for (let i = 0; i < date.length; i++) {
    db.postDates(id, date[i]).then((data) => {
      total += 1;   
      if (total === date.length) {
        res.send('success');
    }})
      .catch(err => console.log('err on post server', err));
  }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
