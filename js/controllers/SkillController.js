app.controller('SkillController', ['$scope', function($scope) {
    /* Spanish*/
    $scope.isLast = function(check) {
        var cssClass = check ? 'end' : null;
        return cssClass;
    };
    $scope.expTitle = "Skill Level: ";
    $scope.skills = {
        rubyOnRails: {
            skill: "Ruby On Rails",
            logoName: "rails.png",
            experienceLevel: "Beginner",
            experienceRate: "30%"
            
        },
        phpSkill: {
            skill: "PHP",
            logoName: "php.png",
            experienceLevel: "Intermediate",
            experienceRate: "60%"
            
        },
        sqlSkill: {
            skill: "MySQL",
            logoName: "sql.png",
            experienceLevel: "Intermediate",
            experienceRate: "60%"
            
        },
        html5Skill: {
            skill: "HTML5",
            logoName: "html.png",
            experienceLevel: "Intermediate",
            experienceRate: "60%"
            
        },
        css3Skill: {
            skill: "CSS3",
            logoName: "css.png",
            experienceLevel: "Intermediate",
            experienceRate: "60%"
        },
        jsSkill: {
            skill: "JavaScript",
            logoName: "js.png",
            experienceLevel: "Intermediate",
            experienceRate: "70%"
        },
        foundationSkill: {
            skill: "Zurb Foundation",
            logoName: "zurb.png",
            experienceLevel: "Intermediate",
            experienceRate: "60%"
        },
        bootstrapSkill: {
            skill: "Bootstrap",
            logoName: "bootstrap.png",
            experienceLevel: "Intermediate",
            experienceRate: "60%"
        },
        gitSkill: {
            skill: "Git",
            logoName: "git.png",
            experienceLevel: "Intermediate",
            experienceRate: "60%"
        },
        angularJSSkill: {
            skill: "AngularJS",
            logoName: "angular.png",
            experienceLevel: "Beginner",
            experienceRate: "20%"
        },
        linuxSkill: {
            skill: "Linux",
            logoName: "linux-logo.png",
            experienceLevel: "Intermediate",
            experienceRate: "50%"
        }
    };
    
    /* SPANISH */
}]);