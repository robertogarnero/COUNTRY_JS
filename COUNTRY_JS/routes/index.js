var express = require('express');
var router = express.Router();
var country = require ('countryjs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/pages/:state/', function(req, res, next){
 res.render('state', {state: country.info(req.params.state)}) ; //Rendiamo lo stato un parametro
})

module.exports = router;
