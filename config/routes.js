
const knex = require("../db/knex.js");

const users = require("../controllers/users.js");
const developers = require("../controllers/developers.js");
const businesses = require("../controllers/businesses.js");


module.exports = function(app){
  app.use(createErrorArr);

  app.get('/', users.index);
  app.get('/logout', users.logout);

  app.get('/developers/login', developers.loginForm);
  app.post('/developers/register', developers.register);
  app.post('/developers/login', developers.login);

  app.get('/businesses/login', businesses.loginForm);
  app.post('/businesses/register', businesses.register);
  app.post('/businesses/login', businesses.login);




  app.use(authenticateUser);

  app.get('/business', businesses.projects);
  //dummy routes for testing
  app.get('/newproject', (req, res) => res.render('new_project'));
  app.get('/projectinfo', (req, res) => res.render('project_info'));






};

function authenticateUser(req, res, next) {
  if (!req.session.user_id && !req.session.business_id) {
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
