const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteController");

// siteController.index
router.get("/search", siteController.search);
//Phải để dưới cùng vì nếu để trên sẽ bị kiểm tra trước và không thể vào được các route khác
router.get("/", siteController.index);

module.exports = router;
