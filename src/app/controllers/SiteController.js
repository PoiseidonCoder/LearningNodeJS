const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../utils/mongoose');

class SiteController {
  //[Get] /
  async index(req, res, next) {
    Course.find({})
      .then(courses=> {
        //Giải quyết vấn đề không thể thay đổi dữ liệu trên database
        res.render('home',{
          courses: multipleMongooseToObject(courses)})
        })
      .catch(next);
  }

  //[Get] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();