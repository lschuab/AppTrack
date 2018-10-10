
const knex = require("../db/knex.js");

const users = require("../controllers/users.js");
const developers = require("../controllers/developers.js");
const businesses = require("../controllers/businesses.js");


module.exports = function(app){
  app.use(createErrorArr);

  app.get('/', users.index);
  app.get('/developers/login', developers.loginForm);
  app.get('/businesses/login', businesses.loginForm);

  app.get('/business', (req, res) => res.render('business'));
  app.get('/newproject', (req, res) => res.render('new_project'));
  app.get('/projectinfo', (req, res) => res.render('project_info'));



  app.use(authenticateUser);



};

function authenticateUser(req, res, next) {
  if (!req.session.doctor_id) {
    res.redirect('/');
  } else {
    next();
  }
}

function createErrorArr(req, res, next){
  if(!req.session.errors){
    req.session.errors = {
      login: [],
      register: [],
    };
  }
  next();
}
