
const knex = require("../db/knex.js");

const users = require("../controllers/users.js");


module.exports = function(app){
  app.use(createErrorArr);

  app.get('/', users.index);
  app.post('/register', users.register);
  app.get('/login', (req, res)=> res.render('business'));


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
