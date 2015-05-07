var request = require('request');

module.exports = {
  getRestaurants: getRestaurants,
  getReviews: getReviews
};

function getRestaurants (req, res) {
  request('http://api.usergrid.com/eunicepark/sandbox/restaurants', function (err, response, body) {
    if (err) {
      res.send(err);
    } else {
      // res.send(body);
      
      // parse and only send the body entities
      body = JSON.parse(body);
      res.send(body.entities);
    }
  });
}

function getReviews (req, res) {
  var restID = req.swagger.params.id.value;
  request('http://api.usergrid.com/eunicepark/sandbox/reviews?ql=restID=' + restID, function (err, response, body) {
    if (err) {
      res.send(err);
    } else {
      // res.send(body);
      
      // parse and only send the body entities
      body = JSON.parse(body);
      res.send(body.entities);
    }
  });
} 