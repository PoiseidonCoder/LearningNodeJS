const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../utils/mongoose");

class MeController {
  //[Get] me/stored/courses
  storedCourses(req, res, next) {
    Promise.all([
      Course.find({}),
      Course.countDocumentsWithDeleted({ deleted: true }),
    ])
      .then(([deletedCount, courses]) =>
        res.render("me/stored-courses", {
          courses: multipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }
  trashCourses(req, res, next) {
    Course.findWithDeleted({ deleted: true }).then((courses) =>
      res.render("me/trash-courses", {
        courses: multipleMongooseToObject(courses),
      })
    ).catch;
  }
}

module.exports = new MeController();
