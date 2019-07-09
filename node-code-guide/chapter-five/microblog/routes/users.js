var express = require('express');
var router = express.Router();
console.log(11111111111111);
/* GET users listing. */
router.get('/users/:username', function(req, res, next) {
  res.send('respond with a resource' + req.params.username);
});

module.exports = router;
