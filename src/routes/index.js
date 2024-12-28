const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

function route(app){
  // Định nghĩa route cho trang chủ
  app.use('/news',newsRouter);
  app.use('/courses', coursesRouter);
  app.use('/', siteRouter);

}
module.exports = route;