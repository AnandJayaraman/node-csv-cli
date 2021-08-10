var express = require('express');
var router = express.Router();
var cors = require('cors');

router.use(cors());

router.get('/', (req, res) => {
  res.send({ message: "ok" });
});

module.exports = router;
