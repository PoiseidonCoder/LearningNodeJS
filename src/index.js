const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
const db = require('./config/db');

// Kết nối tới database
db.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

route(app);

// HTTP logger để hiển thị thông tin chi tiết về các request
app.use(morgan('combined'));

// Cấu hình Template Engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs', // Đuôi file mặc định
    }),
);

// Thiết lập view engine là Handlebars
app.set('view engine', 'hbs');
// Thiết lập đường dẫn đến thư mục views
app.set('views', path.join(__dirname, 'resources', 'views'));

// Định nghĩa route cho trang chủ
app.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' }); // Truyền thêm biến title
});

// Start the server để server lắng nghe tại cổng chỉ định
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
