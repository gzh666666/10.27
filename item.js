var express = require('express');
var router = express.Router();
var mysql= require('mysql'); //引用模块
var connection = mysql.createPool({//创建链接
    host     : 'localhost',
    user     : 'root',
    password : 'root'
});
/* GET home page. */
router.post('/list', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');//跨域
    connection.query('SELECT * FROM baby.chaxun', function(err, rows, fields) {
        res.send(rows);
        console.log(rows)
    });
});

router.post('/data', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    var aa=req.body.id;
    // console.log(aa);
    connection.query(`SELECT * FROM baby.chaxun LIMIT ${aa},3`, function(err, rows, fields) {
        res.send(rows)
    })
});


router.post('/html', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    var aa=req.body.id;
    var bb=aa-1;
    // console.log(aa);
    connection.query(`SELECT * FROM baby.chaxun LIMIT ${bb},6`, function(err, rows, fields) {
        res.send(rows)
    })
});

router.post('/ss', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    var aa=req.body.id;
    var bb=aa-1;
    var cc=bb-1;
    // console.log(aa);
    connection.query(`SELECT * FROM baby.chaxun LIMIT ${cc},9`, function(err, rows, fields) {
        res.send(rows)
    })
});



module.exports = router;
