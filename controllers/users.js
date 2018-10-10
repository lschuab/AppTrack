const knex = require("../db/knex.js");

module.exports = {
  index: (req, res) => {
    res.render('index');
  },






  // register: (req, res) => {
  //   if (req.body.role === "developer") {
  //     knex('developers')
  //       .insert({
  //         email: req.body.email,
  //         password: req.body.password,
  //       })
  //     .then(() => res.redirect('/'))
  //
  //       console.log(err);
  //       if (err.code == 23505) {
  //         req.session.errors.register.push("User with that email already exists.");
  //       }
  //       req.session.save(() => {
  //         res.redirect('/');
  //       });
  //     });
  //   } else if(req.body.role === "business") {
  //     knex('businesses')
  //       .insert({
  //         email: req.body.email,
  //         password: req.body.password,
  //         contact_name: req.body.contact_name,
  //         company_name: req.body.company_name,
  //         phone_number: req.body.phone_number,
  //         company_url: req.body.company_url
  //       })
  //     .then(() => res.redirect('/'))
  //     .catch(err =>  {
  //       console.log(err);
  //       if (err.code == 23505) {
  //         req.session.errors.register.push("User with that email already exists.");
  //       }
  //       req.session.save(() => {
  //         res.redirect('/');
  //       });
  //     });
  //   }
  // },
  //
  // login: (req, res) => {
  //
  // }

};
