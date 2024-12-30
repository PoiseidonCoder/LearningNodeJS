const newsRouter = require("./news");
const siteRouter = require("./site");
const coursesRouter = require("./courses");
const meRouter = require("./me");
const methodOverride = require("method-override");
function route(app) {
  // Định nghĩa route cho trang chủ
  app.use(methodOverride("_method"));
  app.use("/news", newsRouter);
  app.use("/courses", coursesRouter);
  app.use("/me", meRouter);
  // app.use('/', siteRouter);
}
module.exports = route;
