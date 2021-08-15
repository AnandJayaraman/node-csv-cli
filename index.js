var express = require('express');
var router = express.Router();
var cors = require('cors');

router.use(cors());

router.get('/', (req, res) => {
  res.send({ message: "ok" });
});

router.get('/findAll', (req, res) => {
  res.send({ message: "executed find all" });
});

module.exports = router;
