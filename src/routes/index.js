const express = require ( 'express');
const router = express.Router();


router.get('/',(req,res) => {
    res.render('index.html',{ title:'Mi primer WebSide'});
} );

router.get('/contact',(req,res) => {
    res.render('contact.html',{ title:'Mi 2da page del WebSide'});
} );

module.exports = router;