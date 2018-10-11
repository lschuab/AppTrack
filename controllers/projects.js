const knex = require("../db/knex.js");

module.exports = {
  form: (req, res) => {
      res.render('new_project');
  },

  create: (req, res) => {
    knex('projects')
      .insert({
        company_name: req.body.company_name,
        company_url: req.body.company_url,
        stack_pref: req.body.stack_pref,
        dev_type: req.body.dev_type,
        short_description: req.body.short_description,
        full_description: req.body.full_description,
        business_id: req.session.business_id,
      })
    .then(() => {
      res.redirect('/business');
    });
  }
};
