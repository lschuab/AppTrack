
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          company_name: 'Hyver',
          company_url: 'http://hyverlabs.com',
          short_description: 'Port a Chrome extension to Firefox and Safari',
          stack_pref: 'Javascript / HTML / CSS',
          full_description: "Hyver currently offers a Chrome plugin for managing CSS selectors and previewing websites. We need this code ported over to FireFox and Safari with the same functionality that's offered in Chrome currently: https://chrome.google.com/webstore/detail/hyver/ojmjgmmmbepnmkfohhglpjcfnkdbibkb?hl=en-US This project will require knowledge of Javascript, HTML, and CSS as well as some research into browser specificities to make each plugin function properly in its intended browser.",
          dev_type: 'Full Stack Web Developer',
          business_id: 1
        },
        {
        company_name: 'ProvideHER',
        company_url: 'http://www.provideher.com',
        short_description: 'Develop a landing page for ProvideHEr and ProvideHERStreet.com wall street ticker page.',
        stack_pref: 'No Preference',
        full_description: "ProvideHER is a fintech web app we are developing that will be developed as a digital savings app and peer to peer lending marketplace.  As our MVP, we want to build out a website that would provide a Wallstreet style ticker where women could sign up and choose a symbol and it would show how many months they had been part of the community, amount saved, amount lended, # of financial goals met, etc.   Ex:    KRIS001AZ    01    $1000.35     $532.00   4 We are looking for someone to develop the landing page for ProvideHER and the ProvideHERStreet.com  wall street ticker page.   Our plan is to use this as our MVP to gain commitments from women within the next 3-6 months to lend $1 million dollars once our P2P marketplace app has been built and to gain 10K users to the movement for the purposes of gaining investors for the full build and launch. ",
        dev_type: 'Full Stack Web Developer',
        business_id: 2
      },
      {
        company_name: 'Social Media Club Phoenix',
        company_url: 'http://socialmediaclubphx.com',
        short_description: 'A TV Guide for viewers to find live streaming content thats platform-agnostic. and the second part is it would also serve as a place for content creators to schedule into in order to be found.',
        stack_pref: 'No Preference',
        full_description: "I have an idea that I've fielded some interest and ideas about for the building of a live video streaming directory or calendar. Basically a TV Guide for viewers to find live streaming content that's platform-agnostic. and the second part is it would also serve as a place for content creators to schedule into in order to be found. Really looking for an MVP initially, with some potential for it to be developed further through funding, and the developer would be first considered to continue working on it if they so chose. I am a newbie to this sort of thing also, so while I have a very good idea and plan on how this should look and operate, I have no real idea how to build it outside of using a Google calendar.",
        dev_type: 'Full Stack Web Developer',
        business_id: 3
      },
      {
        company_name: 'SONORA Data LLC',
        company_url: 'http://www.sonoradata.com',
        short_description: 'Looking to build a management system to work with our citywide deployment of BLE beacons',
        stack_pref: 'MEAN Stack / Ruby on Rails',
        full_description: "We are looking to build a management system to work with our citywide deployment of BLE beacons. This will allow developers to purchase and manage a pre-deployed beacon in the city of Tempe and create location based applications.",
        dev_type: 'Full Stack Web Developer',
        business_id: 4
      },
      {
        company_name: 'Catalytic Health Partners',
        company_url: 'http://www.catalytichealthpartners.com',
        short_description: 'Develop a game in which one has a body that is healthy and as they do things to it, it becomes sicker and healthier over time.',
        stack_pref: 'No Preference',
        full_description: "We provide disease management as part of the enhanced services we provide to sick individuals in their home environment. The mantra of our company is to disrupt the way things are being done today in healthcare. I came up with this idea to develop a game in which one has a body that is healthy and as they do things to it, it becomes sicker and healthier over time. Much as Farmville and other similar games, when one wins the game there are option to buy additional things to make impact the body further, hopefully for the better. How can we make learning how to manage through issues fun and interesting? We could not find any disease management games on the market today.",
        dev_type: 'Full Stack Web Developer',
        business_id: 5
      },
      {
        company_name: 'eTrack Technologies',
        company_url: 'http://etracktech.com',
        short_description: 'Trying to create repair categories from work order comments (example - repairs to hydraulic system, engine repairs, electrical/lighting repairs).',
        stack_pref: 'Tensorflow/Python but am open to other options',
        full_description: "eTrack Technologies is a startup that is currently raising funding which provides an IOT sensor technology mixed with with machine learning to detect issues with corporate assets and automatically create work orders and diagnostic tools for technicians. We are focusing now on Forklift sensors and have a working IOT solution currently being tested. We have 50k of records from a fortune 500 retailer regarding their current forklift repairs and are trying to create repair categories from work order comments (example - repairs to hydraulic system, engine repairs, electrical/lighting repairs). This is a great opportunity to use natural language processing with real data and see the differences between a manual categorization (which we've done) and what machine learning/data science algorithms can create. Additionally, as previously stated, we are in the process of getting funded and this can lead to a part-time or full-time consulting position.",
        dev_type: 'Data Scientist',
        business_id: 6
      },
      {
        company_name: 'Concentric Corporation',
        company_url: 'http://www.concentriccorp.com',
        short_description: 'Create an app that allows Sales professionals to track and compete for points based on specific activities.',
        stack_pref: 'iOS/Android',
        full_description: "To create an app that allows Sales professionals to track and compete for points based on specific activities.  This app is based on the game of football to make it fun.  (For instance, 'A' activity is worth 10 points = first down, etc.).  Those competing would be able to track their opponents activity, much like a fantasy football app.",
        dev_type: 'Full Stack Web Developer',
        business_id: 7
      },
      {
        company_name: 'MobileLogix',
        company_url: 'http://www.MobileLogix.com',
        short_description: 'Want to identify an integration strategy with the MobileLogix flagship application.',
        stack_pref: 'Java',
        full_description: "This is a project that has both real-world applicability and a bounded end point as a research project. If things work out, we would want to identify an integration strategy with the MobileLogix flagship application. Project details: 1) Using the Java library OptaPlanner, and real-world data that we provide, figure out how to inject the data and constraints into OptaPlanner to produce an optimized crew schedule. 2) Together with MobileLogix, compare the produced schedule with what MobileLogix's current autoschedule produces. 3) Help MobileLogix decide on next steps depending on outcomes above.",
        dev_type: 'Data Scientist',
        business_id: 8
      },
      {
        company_name: 'Invenire.org LLC',
        company_url: 'http://www.myndshft.com',
        short_description: 'Improve on Beta version of ROI Estimator',
        stack_pref: 'PHP, Apache, or others',
        full_description: "We have built and designed a Beta version of our ROI (Return On Investment) Estimator for our Members to compare results from our direct competitors platforms and performance versus ours to learn how to improve the product offering and give a much better detailed explanation for their marketing spend. Our's is currently behind a paywall but here's another version to get better idea of what we'd like to build. While we have a good idea of what we need we are not opposed to new ideas and better ways of doing things so we would encourage anyone that finds this project interesting to add to the project and design as much as they like.",
        dev_type: 'Data Scientist',
        business_id: 9
      },
      {
        company_name: 'Myndshft',
        company_url: 'http://www.Adovation.org',
        short_description: 'Our project is to develop 1 of 4 web apps that will be used by athletes, parents, coaches and trainers to monitor the individual risk of a youth athlete to get a concussion.',
        stack_pref: 'React or Angular',
        full_description: "Our project is to develop 1 of 4 web apps that will be used by athletes, parents, coaches and trainers to monitor the individual risk of a youth athlete to get a concussion while participating in a contact sport.   This is part of a research project we are working on with the Mayo Clinic to leverage healthcare big data, real time monitoring through sensors and environmental data and machine learning to create personalized risk profiles.  Our ultimate goal is to provide athletes, parents, coaches and trainers with the tools and insights to prevent injury before it happens.  We would welcome teams who want to develop all 4 apps.",
        dev_type: 'Full Stack Web Developer',
        business_id: 10
      },
      {
        company_name: 'Myndshft',
        company_url: 'http://www.Adovation.org',
        short_description: 'We would like a student or team of students to work with us to develop an operational dashboard or set of dashboards for an aerospace manufacturing company.',
        stack_pref: '.net & VB6',
        full_description: "We would like a student or team of students to work with us to develop an operational dashboard or set of dashboards for an aerospace manufacturing company.  The work will be a part of our SGNL shopfloor intelligence platform.",
        dev_type: 'Full Stack Web Developer',
        business_id: 10
      },
      {
        company_name: 'Zumot Sooq LLC - Tappetite',
        company_url: 'http://www.tappetiteapp.com',
        short_description: 'Looking for a web development of an E-Commerce website that is mobile capable as well.',
        stack_pref: 'E-Commerce Website that is mobile capable',
        full_description: "Looking for a web development of an E-Commerce website that is mobile capable as well. Tappetite is a virtual bakery where home bakers and independent bakers can post pictures of their baked goods for consumers to buy.  The project would need an E-Commerce platform where bakers can build their virtual shops by entering pictures of their products, prices, etc. There would be search engine within the website, where buyers can search by various categories. There would be a follow baker platform, rating system, and promotion option.",
        dev_type: 'Full Stack Web Developer',
        business_id: 11
      },
      {
        company_name: 'Lash Affair',
        company_url: 'http://www.lashaffair.com',
        short_description: 'I need help with coding my dropdown menu on Shopify.',
        stack_pref: 'HTML , Liquid',
        full_description: "I need help with coding my dropdown menu on Shopify.",
        dev_type: 'Full Stack Web Developer',
        business_id: 12
      },
      {
        company_name: 'SMART Brain Aging, Inc.',
        company_url: 'http://www.smartbrainaging.com',
        short_description: 'Building out our socialized framework and making the product more gamified.',
        stack_pref: 'Ruby on Rails',
        full_description: "We are looking to expand on our current code, building out our socialized framework and making the product more gamified.",
        dev_type: 'Full Stack Web Developer',
        business_id: 13
      },
      {
        company_name: 'Workglue Inc.',
        company_url: 'https://www.Workglue.com',
        short_description: "We want to create a Wordpress plugin that would let people create a new kind of page that wouldnt be displayed in Wordpress at all.",
        stack_pref: 'PHP, MySQL, Wordpress',
        full_description: "This project is ideal for someone looking for Wordpress plugin experience. For some time now we have been interested in the technology needs of smaller companies. For many, a Wordpress site and QuickBooks are the only real technology they use. Our idea is that if someone can figure out Wordpress enough to create and update their own content, we could give them a bridge to interacting with mobile devices. In other words, we want to create a Wordpress plugin that would let people create a new kind of page that wouldn't be displayed in Wordpress at all. These new pages would contain text and images, plus form input fields. A mobile device would fetch these pages/forms from the Wordpress site and display them in the app. Data is collected on the mobile device and returned to the Wordpress site. We currently create pages for the iPad app by hand in XML. However, a Wordpress plugin would open this capability to average Wordpress users. The Wordpress plugin to be developed, requires a graphical user interface for simple drag-and-drop layout/page design. I'm happy to meet any time to discuss a project and demonstrate the work already completed on this project.",
        dev_type: 'Full Stack Web Developer',
        business_id: 14
      },
      {
        company_name: 'KryptoPal',
        short_description: 'Looking for implementations of uRaiden and Raiden network payment channels that leverage the Ethereum and raiden networks.',
        stack_pref: 'Solidity, Javascript, Truffle, Web3, Ethereum, Raiden',
        full_description: "We are looking for implementations of uRaiden and Raiden network payment channels that leverage the Ethereum and raiden networks. We are looking for unique incentive mechanisms for creating off-chain payment channels, and secondary market mechanisms for those off-chain credits.",
        dev_type: 'Blockchain/cryptocurrency',
        business_id: 15
      },
      {
        company_name: 'Insurmi',
        company_url: 'http://www.insurmi.com',
        short_description: 'Make the process of buying life insurance easier and more transparent for consumers around the U.S., through a B2C web platform.',
        stack_pref: 'No Preference',
        full_description: "Take ​already ​built ​Photoshop ​mockups ​and ​develop ​an ​easy ​to ​use ​responsive web-interface ​that ​will ​collect ​five ​points ​of ​customer ​profile ​data ​and ​their ​coverage needs ​to ​match ​customers ​with ​multiple ​life ​insurance ​quotes ​(pulled ​from ​an ​already built ​API) ​so ​they ​can ​easily ​apply ​for ​a ​policy ​online. Build ​a ​backend ​dashboard/database ​where ​users ​can ​create ​a ​login ​to ​save/view their ​application ​status ​and ​policy ​information. Have ​product ​ready ​for ​user-testing ​by ​Capstone ​Presentation ​date.",
        dev_type: 'Full Stack Web Developer',
        business_id: 16
      },
      {
        company_name: 'Science Prep Academy',
        company_url: 'http://www.scienceprepacademy.com',
        short_description: 'Ed Tech: Assessment',
        stack_pref: 'Learning Management Systems (LMS): Canvas',
        full_description: "Comprehensive Assessment System Pre-Built and Customized Solutions For All Your K-12 Assessment Needs Science Prep Academy's comprehensive assessment system makes it the clear choice for educators focused on promoting learning. The comprehensive assessment system is designed to help inform the many types of educational decisions that impact student learning and success. The comprehensive assessment system is the assessment solution teachers have been searching for with easy-to-use tools and robust item banks offering: assessments aligned to state test blueprints multiple assessment types to meet all your needs (such as benchmark, computer adaptive, formative, pre/post, summative, end-of-course) intuitive/flexible Test Builder and Item Builder interfaces for creating and sharing assessments item banks with items in mathematics numerous item types including technology-enhanced and constructed-response as well as performance-based tasks state-of-the-art statistical analyses",
        dev_type: 'Full Stack Web Developer',
        business_id: 17
      },
      {
        company_name: 'bioSyntagma',
        company_url: 'http://www.biosyntagma.com',
        short_description: 'The scope of this project is limited to a specific application where we image a tissue and then microdissect a tissue into arbitrary sized subregions we call “Tiles.”',
        stack_pref: 'No Preference',
        full_description: "We are in the beginning stages of establishing data science as a core competency of our company, and accordingly, this project is exploratory. It includes features of data mining and welcomes proposals, or prototypes, of ways to visualize our data. Our company has developed hardware that correlates genomics and imaging.  Traditionally, they are mutually exclusive where mutations and genes can be studied at the sacrifice of microscope imagery that Pathologists use to diagnose cancer. We have developed hardware that can be used to image tissue, rapidly microdissect tissue and analyze its genome in pieces, and then correlate the results back to the original imaging. The end result is a Google Maps for genomics where we can navigate imagery of tissue much like Google Maps, but instead of displaying streets and addresses, we overlay genetic information such as mutations, etc. There are overwhelming amounts of opportunity to mine this data and correlate the physical locations of mutations and gene expression to predict disease progression and response to treatments. The scope of this project is limited to a specific application where we image a tissue and then microdissect a tissue into arbitrary sized subregions we call “Tiles.”  Each tile, or subregion of tissue, is analyzed to quantify the expression of certain genes.  We then want to correlate that analysis back to the original location of the tile to create a type of heat map for each gene.  The smaller the tile, or subregion, the finer the resolution of this heat map.  Each tile is analyzed for hundreds of genes, and what is of interest is not necessarily the genes of any one tile, but the physical distribution of genes across the tissue along with non-obvious relationships between multiple genes. Another challenge we are looking to solve, but that does not have to be within the scope of this project, is how to visualize this data.  It is obvious to imagine a heat map of a single gene overlayed over a imagery of a tissue, but how do you visualize important information when we are studying 400 genes from each tile? The goal is to identify relationships between spatially resolved genes.  These relationships are the basis of discovery for pharma companies.  A step further, relationships that correlate to outcomes of whether a patient responded to a treatment or not would be the basis of a diagnostic. The data provided in this project would be a sample set and not necessarily biologically relevant, instead useful for development purposes.",
        dev_type: 'Data Scientist',
        business_id: 18
      },
      {
        company_name: 'giantgood',
        company_url: 'http://www.giantgood.com',
        short_description: 'User acquisition and viral flow we have a free app with potential to monetize later via subscription or transactional fees.',
        stack_pref: 'React Native, Node.js, keen.io',
        full_description: "MVP of the product is launching now and we are on a thoroughly modern tech stack and working in a devops environment. Co-founders have deep technology start up experience in consumer services, security, data and gaming industries (including VC-back companies with successful exits). Not only is this an awesome opportunity to contribute to an app start up and learn from the existing team but to have a big say in the product and technology choices we are making. The features and backend systems that we would initially need your assistance on are: User acquisition and viral flow we have a free app with potential to monetize later via subscription or transactional fees. As such, we have to find easy methods to encourage sharing and trial by new users. Testing framework and technology to run simultaneous multivariate tests of key content and features while still getting statistically valid results on as small a set of users as possible. Developing personas for use in creative targeting. This could include demographic and behavioral based targeting based off of available data. System for enabling users to create and publish their own “acts” via our mobile product to their followers or a defined affinity group.",
        dev_type: 'Full Stack Web Developer',
        business_id: 19
      },
      {
        company_name: 'Vig Home Investments LLC',
        company_url: 'http://www.Vighomeinvestments.com',
        short_description: 'Streamline the analysis of properties in the realm of Real Estate Investing.',
        stack_pref: 'Javascript',
        full_description: "Main Objective is to streamline the analysis of properties in the realm of Real Estate Investing. There are three main exit strategies we employ: Fix and Flip, Vacation Rentals, and Traditional Rentals. Each exit strategy has a specific set of parameters to be deemed a “good deal.” Main Users are Real Estate Agents, Real Estate Investors, General Homeowners/Buyers. The analysis will create a report in a PDF format to distribute. Information to be captured to integrate into Marketing Pipeline.",
        dev_type: 'Full Stack Web Developer',
        business_id: 20
      },
      {
        company_name: 'Galvanize - Phoenix',
        company_url: 'http://www.galvanize.com',
        short_description: 'Create an app for 3 different types of users: students, businesses, Galvanize staff.',
        stack_pref: 'No Preference',
        full_description: "Create an app for 3 different types of users: students, businesses, Galvanize staff. Businesses would submit information about a technical project/ application they need built. This would generate a card which students can view and select upon logging in. When a student selects a card (project), it allows them to open communication with the business. (I can offer more details on the UI/ requirements for this project in a face to face conversation.)",
        dev_type: 'Full Stack Web Developer',
        business_id: 21
      },
      {
        company_name: 'Life Quest Training & Consulting, LLC.',
        company_url: 'http://www.ADALifeQuest.com',
        short_description: "Looking to build our own program that not only does what we've built with HomeGauge but more.",
        stack_pref: 'No Preference',
        full_description: "I've used a platform program called HomeGauge to develop a very comprehensive survey tool to help businesses identify if they are compliant with the Americans with Disabilities Act and the 1991 or 2010 Standards for Accessible Design.  With their program and my template, we go through a long series of questions related to access and have pre-loaded answers or can customize our responses.  We can take both pictures and videos that are embedded into the report which presents in an html format or pdf. We are looking to build our own program that not only does what we've built with HomeGauge but more. I'm looking for a student who can become an employee or at least contract with us beyond this program.",
        dev_type: 'Data Scientist',
        business_id: 22
      },
      {
        company_name: 'The Wayne Smith',
        company_url: 'https://www.thewaynesmith.com/',
        short_description: 'Manage the memberships, schedule private events, and reserve the conference and studio rooms.',
        stack_pref: 'No Preference',
        full_description: "The purpose of this application is to manage the memberships, schedule private events, and reserve the conference and studio rooms. There are two types of accounts: admin and member. The admin can access member profiles, request membership payments from members, and add events to a calendar. The member will be able to reserve the conference room, request an event reservation (which the details will be sent to the admin for approval), and reserve equipment. Once reservations are accepted, it will automatically add it to the respective calendars (Events Calendar, Conference Room Calendar, The Shack Studio Calendar and Equipment Reservation Calendar). The calendar platform is currently Google Calendar. Feel free to implement that or make it from scratch. Once that is done, the not as important step would be to make a conference schedule app that can be used by an iPad. This iPad would be displayed in front of the conference room like the iPads at Galvanize. This is just a basic app that can pull reservations from the Conference Room Calendar and show what reservation is currently there and what is coming next. I hope this makes sense.",
        dev_type: 'Full Stack Web Developer',
        business_id: 23
      },
      {
        company_name: 'Atlas AI',
        company_url: 'http://atlasai.ai',
        short_description: "An open source platform so the info will be served on someone's own servers (or they pay for hosting with us.)",
        stack_pref: 'Python 3.5, Tensorflow, Plot.ly',
        full_description: "This is an open source platform so the info will be served on someone's own servers (or they pay for hosting with us.) We are using plotly for analytics. I'm based at Galvanize (I have a desk in the middle reserved desk area) so I'm available to meet and brainstorm readily. I'm here most days.",
        dev_type: 'Data Scientist',
        business_id: 24
      },
      {
        company_name: 'Conscious Creative',
        company_url: 'http://www.phxconscious.com',
        short_description: 'We want a Provider to have the basic ability to create a profile and add services. The clients will be able to search the providers and purchase a ticket to an event where they can meet and connect with them.',
        stack_pref: 'React/Redux/Firebase/Express/Node/PSQL',
        full_description: "A user will create an account and answer some questions about themselves to create a profile. There will be two types of users (Clients and Providers). We want a Provider to have the basic ability to create a profile and add services. The clients will be able to search the providers and purchase a ticket to an event where they can meet and connect with them. This is an MVP type build and we have screens and a workflow to help build the product. A in depth meeting can be set to ask questions and get some more detailed info.",
        dev_type: 'Full Stack Web Developer',
        business_id: 25
      }
      ]);
    });
};
