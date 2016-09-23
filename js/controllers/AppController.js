app.controller('AppController', ['$scope', function($scope) {
    $scope.nav = {
        nav: [
            {
                item: "Resumen",
                url: "#/"
            },
            {
                item: "Habilidades",
                url: "#/skills"
            },
            {
                item: "Experiencia",
                url: "#/experience"
            },
            {
                item: "Educaci&oacute;n",
                url: "#/education"
            },            
            {
                item: "Portaf&oacute;lio",
                url: "#/portafolio"
            }
        ],
        navSpa: [{
            item: "Inicio",
            url: "/"
        }]
    }
}]);