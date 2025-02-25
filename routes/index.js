const fs = require('fs');
const path = require('path');

module.exports = (app) => {


  fs.readdirSync(path.join(__dirname, 'api')).forEach((file) => {
    if (!file.endsWith('.js')) return;
    const route = require(path.join(__dirname, 'api', file));
    app.use('/api', route);
  });

  fs.readdirSync(path.join(__dirname, 'pages')).forEach((file) => {
    if (!file.endsWith('.js')) return;
    const route = require(path.join(__dirname, 'pages', file));
    app.use('/', route);
  });


};
