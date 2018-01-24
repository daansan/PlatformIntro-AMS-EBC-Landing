var express = require('express');
var router = express.Router();
var launcher = process.env.LAUNCHER || 'https://sfdx-deployer.herokuapp.com/launch?template=';

/* GET home page. */
router.get('/', function(req, res, next) {
  var demos = [
    {
      name : 'Salesforce Platform Introduction Demonstration - Part I',
      description : 'Build a working application in 10 minutes for an animal shelter to administer and maintain their registry of Cats.',
      launchURL: launcher + 'https://github.com/daansan/PlatformIntro-AMS-EBC-1',
      docsURL : 'https://salesforce.quip.com/TUApAzAUvic6'
    },
    {
      name : 'Salesforce Platform Introduction Demonstration - Part II',
      description : 'Extend the Application with Image Recognition, workflow and community outreach.',
      launchURL: launcher + 'https://github.com/daansan/PlatformIntro-AMS-EBC-2',
      docsURL : 'https://salesforce.quip.com/zDRtAZ8IQu3r'
    }
  ];
  res.render('index', { demos: demos});
});
/*
router.get('/demos', function (req, res, next) {
  var workshops = [
    {
      name: 'Ducati: Extend CRM',
      description: 'Custom Objects help manage Bikes, Dealers, and Live Events.  A Lightning App built with Components helps organize Live Events and Process Builder keep Sales Managers in the loop.  (from the DF17 Campground)',
      launchURL: launcher + 'https://github.com/mshanemc/cg1',
      docsURL: 'https://salesforce.quip.com/bY08A4XodAFN'
    },
    {
      name: 'Ducati: Integrate Data from Anywhere',
      description: 'Salesorce Connect brings Invoices from an ERP system into Salesforce, including the mobile app, with no code.  (from the DF17 Campground)',
      launchURL: launcher + 'https://github.com/mshanemc/cg4Integrate',
      docsURL: 'https://salesforce.quip.com/sh0EAdWZDsiW'
    },
    {
      name: 'Ducati: Transform Customer Experiences',
      description: 'Our broad vision--Connected products, customer-facing mobile apps backed by Heroku + Heroku Pipelines, and Lightning seamlessly share information with Heroku Connect and Platform Events.  Some setup required, but totally worth it! (from the DF17 Campground)',
      launchURL: launcher + 'https://github.com/mshanemc/platform-campground-customer-exp',
      docsURL: 'https://salesforce.quip.com/pySzAu1av18a'
    }
  ];
  res.render('demos', { workshops: workshops });
});*/

module.exports = router;
