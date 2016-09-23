app.controller('AppController', ['$scope', function($scope) {
    $scope.nav = {
        navEng: [
            {
                item: "Resume",
                url: "#/"
            },
            {
                item: "Skills",
                url: "#/skills"
            },
            {
                item: "Experience",
                url: "#/experience"
            },
            {
                item: "Education",
                url: "#/education"
            },            
            {
                item: "Portafolio",
                url: "#/portafolio"
            }
        ],
        navSpa: [{
            item: "Inicio",
            url: "/"
        }]
    }
}]);