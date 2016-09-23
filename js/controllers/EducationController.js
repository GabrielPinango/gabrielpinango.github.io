app.controller('EducationController', ['$scope', function($scope) {
    $scope.title = "Educacion";
    $scope.education = [
        { 
            name: "UNITEC",
            educationLevel: 'Ingenieria en Informacion',
            from: '20120109T00',
            to: '20120109T00',
            logo: "http://www.ccnpg.gob.ve/img/logos_inst/unitec.gif"
        },
        { 
            name: "Pablo VI",
            educationLevel: 'Educacion Superior',
            from: '20120109T00',            
            to: '20120109T00',            
            logo: "img/pvi.png"
        },
        { 
            name: "San Juan Bautista",
            educationLevel: 'Secundaria',
            from: '20120109T00',
            to: '20120109T00',
            logo: "img/sjb.jpg"
        }
    ];
    
    /* English */
    $scope.titleEng = "Education";
    $scope.educationEng = [
        { 
            name: "UNITEC",
            educationLevel: 'Information Engineering',
            from: '20120109T00',
            to: '20120109T00',
            logo: "http://www.ccnpg.gob.ve/img/logos_inst/unitec.gif"
        },
        { 
            name: "Pablo VI",
            educationLevel: 'High School',
            from: '20120109T00',            
            to: '20120109T00',            
            logo: "../img/pvi.png"
        },
        { 
            name: "San Juan Bautista",
            educationLevel: 'Secundary',
            from: '20120109T00',
            to: '20120109T00',
            logo: "../img/sjb.jpg"
        }
    ];
}]);