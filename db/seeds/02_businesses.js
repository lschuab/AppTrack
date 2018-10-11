
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('businesses').del()
    .then(function () {
      // Inserts seed entries
      return knex('businesses').insert([
        {
          contact_name: 'Kirk Morales',
          email: 'kirk@hyverlabs.com',
        },
        {
          contact_name: 'Catilin Derr',
          email: 'caitlin@provideher.com',
          phone_number: '314-541-0112'
        },
        {
          contact_name: 'Vincent Orleck',
          email: 'vincentorleck@gmail.com',
          phone_number: '480-235-2203'
        },
        {
          contact_name: 'Zak DeBrine',
          email: 'zak@sonoradata.com',
          phone_number: '303-884-0838'
        },
        {
          contact_name: 'Susan Cordts',
          email: 'scordts@catalytichealthpartners.com',
          phone_number:'602-332-3363'
        },
        {
          contact_name: 'Crystal Taggart',
          email: 'crystal@buildmyapp.today',
          phone_number:'602-350-8495'
        },
        {
          contact_name: 'Andy Hawkins',
          email: 'Andy@concentriccorp.com',
          phone_number:'480-868-2600 x105'
        },
        {
          contact_name: 'Cory Berg',
          email: 'cory@mobilelogix.com',
          phone_number:'480-457-0376'
        },
        {
          contact_name: 'John Oelze',
          email: 'JOelze@Adovation.org',
          phone_number:'602-689-7977'
        },
        {
          contact_name: 'Ron Wince',
          email: 'ron@myndshft.com',
          phone_number:'480-223-2291'
        },
        {
          contact_name: 'Kay Diggs',
          email: 'kdiggs@tappetiteapp.com',
          phone_number:'623-455-1819'
        },
        {
          contact_name: 'Jenelle Paris',
          email: 'jenelle@lashaffair.com',
          phone_number:'978-985-5423'
        },
        {
          contact_name: 'Dr. John DenBoer',
          email: 'drjohn@smartbrainaging.com',
          phone_number:'480-993-3879'
        },
        {
          contact_name: 'Robert Stoeber',
          email: 'Robert@Workglue.com',
          phone_number:'707-786-3237'
        },
        {
          contact_name: 'Jaycen Horton',
          email: 'jaycenh@kryptopal.io',
          phone_number:'208-820-8595'
        },
        {
          contact_name: 'Sonny Patel',
          email: 'sonny@patelglobal.com',
          phone_number:'314-808-1298'
        },
        {
          contact_name: 'Kenneth Mims',
          email: 'kmims@scienceprepacademy.com',
          phone_number:'602-832-4708'
        },
        {
          contact_name: 'David Richardson',
          email: 'david@biosyntagma.com',
          phone_number:'602-516-2129'
        },
        {
          contact_name: 'Nick Robbins',
          email: 'nick@giantgood.com',
          phone_number:'617-510-8538'
        },
        {
          contact_name: 'Masrur Huq',
          email: 'masrur@vighomeinvestments.com',
          phone_number:'480-886-6606'
        },
        {
          contact_name: 'Maria',
          email: 'maria.montoya@galvanize.com',
          phone_number:'602-350-6497'
        },
        {
          contact_name: 'Nanette Odell',
          email: 'nanette@adalifequest.com',
          phone_number:'623-826-0140'
        },
        {
          contact_name: 'Aritro Majumdar',
          email: 'majumdar.aritro@gmail.com',
          phone_number:'480-772-9170'
        },
        {
          contact_name: 'Crystal Taggart',
          email: 'ct@atlasai.ai',
          phone_number:'602-350-8495'
        },
        {
          contact_name: 'Chris Jannenga',
          email: 'chris.jannenga@gmail.com',
          phone_number:'970-313-3358'
        }
      ]);
    });
};
