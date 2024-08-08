const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

//đây là middleware đã có express.urlencoded xử lý
app.use(express.urlencoded({
    extended: true
})); 
//với dạng gửi từ code javascript lên thì nó đã có express.json xử lý
app.use(express.json()); 

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));


//Route init
route(app);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));