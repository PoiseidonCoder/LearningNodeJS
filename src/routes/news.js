const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// newsController.index
router.use('/:slug', newsController.show);
//Phải để dưới cùng vì nếu để trên sẽ bị kiểm tra trước và không thể vào được các route khác
router.use('/', newsController.index);

module.exports = router;