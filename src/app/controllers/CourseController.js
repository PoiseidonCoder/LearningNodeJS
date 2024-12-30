const Course = require("../models/Course");
var slug = require("mongoose-slug-generator");
const { mongooseToObject } = require("../../utils/mongoose");
var mongoose = require("mongoose");
mongoose.plugin(slug);

class CourseController {
  //[Get] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }
  create(req, res, next) {
    res.render("courses/create");
  }
  //[Post] /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(req.body);
    course.save().then(() => res.redirect(`/`));
  }
  //[Get] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", {
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }
  //[Put] /courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        console.log("hihi ");
        return res.redirect("/me/stored/courses");
      })
      .catch(next);
  }
  //[Delete] /courses/:id
  delete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}
module.exports = new CourseController();
