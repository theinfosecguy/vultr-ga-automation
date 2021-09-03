const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
    res.send('<p>Welcome to Vultr Gtihub Actions Tutorial</p>');
});


module.exports = router;