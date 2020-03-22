var express = require('express');
var router = express.Router();

/* GET home page. */

var dataBike = [
  {name:"Marc Marquez", url:"/images/bike-1.jpg",price:"579"},
  {name:"Fabio Quartararo", url:"/images/bike-2.jpg",price:"679"},
  {name:"Michael Schumacher", url:"/images/bike-3.jpg",price:"779"},
  {name:"Lewis Hamilton", url:"/images/bike-4.jpg",price:"889"},
  {name:"Usain Bolt", url:"/images/bike-5.jpg",price:"999"},
  {name:"Christophe Lemaitre", url:"/images/bike-6.jpg",price:"1299"},
  {name:"Laure Manaudou", url:"/images/bike-1.jpg",price:"889"},
  {name:"Camille Lacourt", url:"/images/bike-3.jpg",price:"999"},
  {name:"Shinkansen", url:"/images/bike-2.jpg",price:"1299"},
]

var dataCardBike = [
  // {name: "", url: "", price: "", quantity: 1},
  
]



router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { dataBike: dataBike });
});

router.get('/shop', function(req, res, next) {

  console.log('req.querySHOP :', req.query);
  console.log('req.query.price :', req.query.price);
  // var nameFromFront = req.query.name;
  // console.log('nameFromFront :', nameFromFront);
  // var urlFromFront = req.query.url;
  // var priceFromFront = req.query.price;

  dataCardBike.push({
    name: req.query.name,
    url : req.query.url,
    price: req.query.price,
    quantity:1
  })

  console.log('dataCardBike :', dataCardBike);


  res.render('shop', {dataCardBike: dataCardBike});

});

router.get('/delete-shop', function(req, res, next) {
  console.log('req.queryDELETESHOP :', req.query);
  dataCardBike.splice(req.query.position,1)
  res.render('shop', {dataCardBike});
});

router.post('/update-shop', function(req, res) {
  console.log('req.bodyQUANTITY :', req.body);
  var position = req.body.position;
  var newQuantity = req.body.quantity;

  dataCardBike[position].quantity = newQuantity;
  res.render('shop', { dataCardBike, position, newQuantity });
});

module.exports = router;
