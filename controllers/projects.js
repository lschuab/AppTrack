const knex = require("../db/knex.js");

module.exports = {
  create: (req, res) => {
      res.render('new_project');
  }
};
