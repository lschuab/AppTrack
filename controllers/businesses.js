const knex = require("../db/knex.js");

module.exports = {
  loginForm: (req, res) => {
    res.render('business_login', {errors: req.session.errors});
        req.session.errors = {
          login: [],
          register: [],
        };
        req.session.save();
  }
};
