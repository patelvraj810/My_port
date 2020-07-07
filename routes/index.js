'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Home' });
});

router.get('/about_Me', function (req, res) {
    res.render('about_Me', { title: 'About Me' });
});


router.get('/projects_page', function (req, res) {
    res.render('projects_page', { title: 'Projects page' });
});

router.get('/services_page', function (req, res) {
    res.render('services_page', { title: 'Services page' });
});


router.get('/contact_Me', function (req, res) {
    res.render('contact_Me', { title: 'Contact Me' });
});

module.exports = router;
