const knex = require("../db/knex.js");

module.exports = {
  loginForm: (req, res) => {
    res.render('dev_login', {errors: req.session.errors});
        req.session.errors = {
          login: [],
          register: [],
        };
        req.session.save();
  },


    register: (req, res) => {
      knex('developers')
        .insert({
          dev_name: req.body.dev_name,
          email: req.body.email,
          password: req.body.password,
          })
      .then(() => res.redirect('/developers/login'))
      .catch(err => {
        console.log(err);
        if (err.code == 23505) {
          req.session.errors.register.push("User with that email already exists.");
        }
        req.session.save(() => {
          res.redirect('/developers/login');
        });
      });
    },


    login: (req, res) => {
      knex('developers')
        .where('email', req.body.email)
      .then(results => {
        const developer = results[0];
        if (!developer) {
          req.session.errors.login.push("Email or password incorrect.");
          req.session.save(() => {
            res.redirect('/developers/login');
            return;
          });
        }
        if (req.body.password === developer.password) {
          req.session.developer_id = developer.id;
          req.session.save(() => {
            res.redirect('/project_info');
          });
        } else {
          req.session.errors.login.push("Email or password incorrect.");
          req.session.save(() => {
            res.redirect('/developers/login');
            return;
          });
        }
      });
    },

};
