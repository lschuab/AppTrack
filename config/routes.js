
const knex = require("../db/knex.js");

const users = require("../controllers/users.js");
const developers = require("../controllers/developers.js");
const businesses = require("../controllers/businesses.js");
const projects = require("../controllers/projects.js");


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
  app.get('/projects/new', projects.form);
  app.post('/projects', projects.create);
  app.get('/projects/edit/:id', projects.editForm);
  app.post('/projects/edit/:id', projects.edit);
  app.get('/projects/delete/:id', projects.delete);
  app.get('/projects/business/:id', projects.viewBusiness);

  app.get('/developer', developers.browse);
  app.get('/projects/developer/:id', projects.viewDeveloper);
  app.get('/projects/accept/:id', projects.accept);
  app.get('/projects/abandon/:id', projects.abandon);



};

function authenticateUser(req, res, next) {
  if (!req.session.developer_id && !req.session.business_id) {
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
