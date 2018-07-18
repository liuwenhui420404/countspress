var express = require('express');
var router = express.Router();
const submitsingleuser = require('../model/submitsingleuser');
const getallusers = require('../model/getallusers');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/submitsingeuser',submitsingleuser);//submitsingleuser
//获取所有用户的接口（用户管理）
router.get('/getalluser',getallusers);

module.exports = router;
