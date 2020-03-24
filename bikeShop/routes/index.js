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
  {name:"Laure Manaudou", url:"/images/bike-7.jpg",price:"889"},
  {name:"Camille Lacourt", url:"/images/bike-8.jpg",price:"999"},
  {name:"Shinkansen", url:"/images/bike-9.jpg",price:"1299"},
]

router.get('/', function(req, res, next) {


  res.render('home', { title: 'Express' });
});

router.get('/index', function(req, res, next) {

  console.log('req.session.dataCardBike :', req.session.dataCardBike);

  if(req.session.dataCardBike == undefined){
    req.session.dataCardBike = []
  }

  res.render('index', { dataBike: dataBike});
});

router.get('/shop', function(req, res, next) {

  var alreadyExist = false;

for(var i = 0 ; i<req.session.dataCardBike.length ; i++){
  if(req.session.dataCardBike[i].name == req.query.name){
    req.session.dataCardBike[i].quantity = Number(req.session.dataCardBike[i].quantity) + 1;
    alreadyExist = true;
  }
}

  if(alreadyExist == false){
    req.session.dataCardBike.push({
      name: req.query.name,
      url : req.query.url,
      price: req.query.price,
      quantity:1
    })
  }


  console.log('req.querySHOP :', req.query);
  console.log('req.query.price :', req.query.price);


  

  console.log('dataCardBike :', req.session.dataCardBike);


  res.render('shop', {dataCardBike: req.session.dataCardBike});

});

router.get('/delete-shop', function(req, res, next) {
  console.log('req.queryDELETESHOP :', req.query);
  req.session.dataCardBike.splice(req.query.position,1)
  res.render('shop', {dataCardBike: req.session.dataCardBike});
});

router.post('/update-shop', function(req, res) {
  console.log('req.bodyQUANTITY :', req.body);
  var position = req.body.position;
  var newQuantity = req.body.quantity;

  req.session.dataCardBike[position].quantity = newQuantity;
  res.render('shop', { dataCardBike : req.session.dataCardBike, position, newQuantity });
});

module.exports = router;
