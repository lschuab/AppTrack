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
  },

  viewBusiness: (req, res) => {
    knex('projects')
      .select('projects.*', 'developers.dev_name', 'developers.email')
      .where('projects.id', req.params.id)
      .leftJoin('developers', 'projects.dev_id', 'developers.id')
    .then((results) => {
      const project = results[0];
      if (project.business_id !== req.session.business_id) {
        res.redirect('/business');
      } else {
        knex('businesses')
          .where('id', req.session.business_id)
        .then(results2 => {
          res.render('projectinfo', {project: project, business: results2[0]});
        });
      }
    });
  },

  viewDeveloper: (req, res) => {
    knex('projects')
      .where('id', req.params.id)
    .then((results) => {
      const project = results[0];
      knex('businesses')
        .where('id', project.business_id)
      .then(results2 => {
        res.render('projectinfo_dev', {project: project, business: results2[0], developer_id: req.session.developer_id});
      });
    });
  },

  editForm: (req, res) => {
    knex('projects')
      .where('id', req.params.id)
    .then((results) => {
      const project = results[0];
      if (project.business_id !== req.session.business_id) {
        res.redirect('/business');
      } else {
        res.render('edit_project', {project: project});
      }
    });
  },

  edit: (req, res) => {
    knex('projects')
      .where('id', req.params.id)
      .update({
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
  },

  delete: (req, res) => {
    knex('projects')
      .where('id', req.params.id)
      .del()
    .then(() => {
      res.redirect('/business');
    });
  },

  accept: (req, res) => {
    knex('projects')
      .where('id', req.params.id)
      .update({
        dev_id: req.session.developer_id
      })
    .then(() => {
      res.redirect('/developer');
    });
  },

  abandon: (req, res) => {
    knex('projects')
      .where('id', req.params.id)
      .update({
        dev_id: null
      })
    .then(() => {
      res.redirect('/developer');
    });
  }

};
