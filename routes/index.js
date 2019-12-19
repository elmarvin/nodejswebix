var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var jresp = { 'test': 'Pruebas con Webix' }
  res.render('login/index', jresp);
});

router.get('/data_test', function (req, res, next) {
  var big_film_set = [
    { 
      "id": 1, 
      "title": "Primera Prueba con Webix", 
      "year": "1994", 
      "votes": "678,79", 
      "rating": "9,2", 
      "rank": "1" 
    },
    { 
      "id": 2, 
      "title": "Segunda Prueba con Webix", 
      "year": "1994", 
      "votes": "678,79", 
      "rating": "9,2", 
      "rank": "1" 
    },
    { 
      "id": 3, 
      "title": "Tercera Prueba con Webix", 
      "year": "1994", 
      "votes": "678,79", 
      "rating": "9,2", 
      "rank": "1" 
    }
  ];
  res.status(200).json(big_film_set)
});

module.exports = router;
