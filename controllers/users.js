const knex = require("../db/knex.js");

module.exports = {
  index: (req, res) => {
    res.render('index');
  },

  logout: (req, res) => {
    req.session.destroy();
    res.redirect('/');
  }
};
