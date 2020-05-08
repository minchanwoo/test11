var express = require('express');
var path = require('path');

var cors = require('cors');

const { sequelize } = require('./models');

const routes = require('./routes')

var app = express();

app.set('port', process.env.PORT || 4000);

sequelize.sync();

app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(app.get('port'), ()=> {
  console.log(app.get('port'), '번에서 대기중~!!')
})

module.exports = app;


