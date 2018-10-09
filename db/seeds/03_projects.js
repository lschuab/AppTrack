
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          short_description: 'Port a Chrome extension to Firefox and Safari',
          stack_pref: 'Javascript / HTML / CSS',
          full_description: "Hyver currently offers a Chrome plugin for managing CSS selectors and previewing websites. We need this code ported over to FireFox and Safari with the same functionality that's offered in Chrome currently: https://chrome.google.com/webstore/detail/hyver/ojmjgmmmbepnmkfohhglpjcfnkdbibkb?hl=en-US This project will require knowledge of Javascript, HTML, and CSS as well as some research into browser specificities to make each plugin function properly in its intended browser.",
          business_id: 1
        }
      ]);
    });
};
