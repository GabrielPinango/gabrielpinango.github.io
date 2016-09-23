app.controller('ExperienceController', ['$scope', function($scope) {
    $scope.title = "Experiencia";
    $scope.experiences = {
        freenlance: {
            place: "Freelancer",
            description: 'Durante el a&ntilde;o 2015 fij&eacute; como meta aprender a utilizar Ruby on Rails, HTML5 y CSS3. Desarrolle aplicaciones b&aacute;sicas para practicar, de manera que pudiese formular las preguntas necesarias, los "Qu&eacute;?", "C&oacute;mo?" y "Porqu&eacute;?". Fu&eacute; a lo largo de Ocutubre de ese a&ntilde;o que decid&iacute; poner en practica los conocimientos obtenidos hasta ese punto, por lo tanto obtuve mi primer proyecto (<a href="Areiro.com"><i>Areiro</i></a>), con el cual pude realizar una aplicaci&oacute;n donde fueron aplicadas las cinco funciones b&aacute;sicas para el manejo de datos (<i>SCRUD</i>). Luego pude conseguir otros proyectos los cuales me han permitido progresar en mi meta de ser un Desarrollador Web Full-Stack. As&iacute;mismo, he logrado desarrollar JSON REST APIs b&aacute;sicas con Rails, que interactuen con AngularJS como front-end.',
            address: "Venezuela",
            position: "Desarrollador Web",
            experienceGained: "HTML5, CSS3, JavaScript, JQuery, Ruby on Rails, AngularJS",
            timeFrom: '20151001T00',
            timeTo: "Actualidad",
            logoURL: "img/csdevs.png"
        },
        laCaridad: {
            place: "Grupo empresarial La Caridad",
            description: "La Caridad es una empresa que me brind&oacute; la oportunidad efectuar una pr&aacute;ctica profesional en el Departamento de Inform&aacute;tica. Pude poner en pr&aacute;ctica mis conocimiento en el &aacute;rea de soporte t&eacute;cnico en la empresa, pero esta pr&aacute;ctica profesional no solo se limito a esta &aacute;rea, ya que por la naturaleza productiva de la empresa, utilizan el sistema SAP para el control de sus procesos, pude obtener conocimiento b&aacute;sico en cuanto al uso de este ERP y algo de exposici&oacute;n al lenguaje ABAP.",
            address: "Maracay, Edo. Aragua, Venezuela",
            position: "Pasante",
            experienceGained: "Soporte Tecnico",
            timeFrom: '20120109T00',
            timeTo: "20120320T00",
            logoURL: "http://grecodesigns.com.ve/img/logos/logo_caridad_bw.gif"
        },
        upel: {
            place: "Universidad Pedagógica Experimental Libertador",
            description: 'Las pasant&iacute;as en la Universidad Pedag&oacute;gica Experimental Libertardor fueron ejercidas en el Departamento de Inform&aacute;tica de dicha instituci&oacute;n durante un per&iacute;odo de 3 meses. A lo largo de estas pasant&iacute;as se presentaron situaciones donde pude aplicar mis conocimientos en el area de soporte t&eacute;cnico, as&iacute;mismo, logre adquirir nuevos conocimientos en el &aacute;rea de redes.',
            address: "Maracay, Edo. Aragua, Venezuela",
            position: "Pasante",
            experienceGained: "Soporte Tecnico",
            timeFrom: '20100304T00',
            timeTo: "20100604T00",
            logoURL: "https://lh4.googleusercontent.com/VrmhPEhzKUem-9Q5CDd-SoQ5flRccCh5ZO0ribpw8-Sy5770_mxuVzssaF8yAEhDfzYZVly5WcyYpHp9j-h97c87F29wYc-QH2xTh7ehZmB71kXiQp7Og0jGl6oh19poo0LSCnE"
        }
    };
    
    
    /*English*/
    $scope.titleEng = "Experience";
    $scope.experiencesEng = {
        freenlance: {
            place: "Freelancer",
            description: "During 2015 I set a goal, to learn Ruby on Rails, HTML5 and CSS3. I developed basic apps to practice, so that I could ask necessary questions, the \"Whats?\", \"Hows?\" and \"Whys?\". Through October of that year I decided to put my newly-acquired knowledge into practice,therefore I got my first project (<a href=\"Areiro.com\"><i>Areiro</i></a>), with wich I could build a SCRUD application. After that I got new projects, which have helped me to achieve my goal of becoming a Full-Stack Web Dev. Likewise, I've managed to develop basic JSON RESTful APIs with Rails that interacts with AngularJS.",
            address: "Venezuela",
            position: "Web Developer",
            experienceGained: "HTML5, CSS3, JavaScript, JQuery, Ruby on Rails, AngularJS",
            timeFrom: '20151001T00',
            timeTo: "Current",
            logoURL: "../img/csdevs.png"
        },
        laCaridad: {
            place: "Grupo empresarial La Caridad",
            description: "La Caridad is an organization that gave me the opportunity to do an internship in the IT Department. I could put into practice my knowledge of technical support there, but this professional practice wasn't only limited to that area, due to the productive nature of the organization, they use the ERP SAP to manage their processes, so I could get basic knowledge about that ERP and some exposure to ABAP.",
            address: "Maracay, Edo. Aragua, Venezuela",
            position: "Intern",
            experienceGained: "Technical Support, SAP",
            timeFrom: '20120109T00',
            timeTo: "20120320T00",
            logoURL: "http://grecodesigns.com.ve/img/logos/logo_caridad_bw.gif"
        },
        upel: {
            place: "Universidad Pedagógica Experimental Libertador",
            description: 'The interships at UPEL were performed  at the IT Department during 3 months. Throughout this profesional practice I faced some situations that allowed me to put my knowledge about technical support and networking into practice and learn new things."',
            address: "Maracay, Edo. Aragua, Venezuela",
            position: "Intern",
            experienceGained: "Technical Support",
            timeFrom: '20100304T00',
            timeTo: "20100604T00",
            logoURL: "https://lh4.googleusercontent.com/VrmhPEhzKUem-9Q5CDd-SoQ5flRccCh5ZO0ribpw8-Sy5770_mxuVzssaF8yAEhDfzYZVly5WcyYpHp9j-h97c87F29wYc-QH2xTh7ehZmB71kXiQp7Og0jGl6oh19poo0LSCnE"
        }
    };
}]);