const knex = require("../db/knex.js");

module.exports = {
  loginForm: (req, res) => {
    res.render('business_login', {errors: req.session.errors});
        req.session.errors = {
          login: [],
          register: [],
        };
        req.session.save();
  },

  register: (req, res) => {
    knex('businesses')
      .insert({
        email: req.body.email,
        password: req.body.password,
        contact_name: req.body.contact_name,
        company_name: req.body.company_name,
        phone_number: req.body.phone_number,
        company_url: req.body.company_url
        })
    .then(() => res.redirect('/businesses/login'))
    .catch(err => {
      console.log(err);
      if (err.code == 23505) {
        req.session.errors.register.push("User with that email already exists.");
      }
      req.session.save(() => {
        res.redirect('/businesses/login');
      });
    });
  },

  login: (req, res) => {
    knex('businesses')
      .where('email', req.body.email)
    .then(results => {
      const business = results[0];
      if (!business) {
        req.session.errors.login.push("Email or password incorrect.");
        req.session.save(() => {
          res.redirect('/businesses/login');
          return;
        });
      }
      if (req.body.password === business.password) {
        req.session.business_id = business.id;
        console.log(req.session.business_id);
        req.session.save(() => {
          res.redirect('/business');
        });
      } else {
        req.session.errors.login.push("Email or password incorrect.");
        req.session.save(() => {
          res.redirect('/businesses/login');
        });
      }
    });
  },

  projects: (req, res) => {
    knex('businesses')
      .where('id', req.session.business_id)
    .then(results => {
      knex('projects')
        .where('business_id', req.session.business_id)
      .then(projects => {
        res.render('business', {business: results[0], projects: projects});
      });
    });
  }

};
