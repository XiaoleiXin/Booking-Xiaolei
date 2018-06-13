const mysql = require('mysql');
const config = require('./config.js');

const connection = mysql.createConnection(config);

const getBookedDates = (id) => {
  return new Promise((resolve, reject) => {
    const query = `select * from Dates where roomId = '${id}'`;
    connection.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const getPriceInfo = (id) => {
  return new Promise((resolve, reject) => {
    const query = `select * from Info where id = '${id}'`;
    connection.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const postDates = (id, date) => {
  return new Promise((resolve, reject) => {
    const query = `insert into dates values ('${id}', '${date}')`;
    connection.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};
module.exports = {
  getBookedDates,
  getPriceInfo,
  postDates,
};
