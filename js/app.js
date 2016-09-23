$(document).foundation();

var app = angular.module('MyWebsite', ['ngRoute', 'ngSanitize']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'HomeController', 
      templateUrl: 'views/home.html' 
    }).when('/skills', {
      controller: 'SkillController', 
      templateUrl: 'views/skill.html' 
  }).when('/experience', {
      controller: 'ExperienceController', 
      templateUrl: 'views/experience.html' 
  }).when('/education', {
      controller: 'EducationController', 
      templateUrl: 'views/education.html' 
  }).when('/portafolio', {
      controller: 'PortafolioController', 
      templateUrl: 'views/portafolio.html' 
  }).when('/contact', {
      controller: 'ContactController', 
      templateUrl: 'views/contact.html' 
  })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});