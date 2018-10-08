
const knex = require("../db/knex.js");

const CHANGE = require("../controllers/CHANGE.js");


module.exports = function(app){
  app.use(createErrorArr);



  app.use(authenticateUser);



};

function authenticateUser(req, res, next) {
  if (!req.session.doctor_id) {
    res.redirect('/doctors/login');
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
