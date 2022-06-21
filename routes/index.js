var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* Страница Соника */
router.get('/sonic', function(req, res, next) {
  res.render('hero', {
      title: "Соник",
      picture: "images/sonic.png",
      desc: "Антропоморфный ёж, рожденный со способностью бежать быстрее, чем скорость звука."
  });
});


/* Страница Наклза */
router.get('/knuckles', function(req, res, next) {
  res.render('hero', {
      title: "Наклз",
      picture: "images/knuckles.png",
      desc: "Антропоморфная ехидна и хранитель Мастера изумруда, могущественной древней реликвии."
  });
});

/* Страница Тейлза */
router.get('/tails', function(req, res, next) {
  res.render('hero', {
      title: "Тейлз",
      picture: "images/tails.png",
      desc: "Антропоморфный лисёнок, родившийся с генетическим отклонением, которое дало ему два хвоста."
  });
});

/* Страница Эггмана */
router.get('/eggman', function(req, res, next) {
  res.render('hero', {
      title: "Доктор Эггман",
      picture: "images/eggman.png",
      desc: "Человек, гениальный учёный и заклятый враг ежа Соника."
  });
});


module.exports = router;
