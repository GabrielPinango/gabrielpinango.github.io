app.controller('SkillController', ['$scope', function($scope) {
    /* Spanish*/
    $scope.isLast = function(check) {
        var cssClass = check ? 'end' : null;
        return cssClass;
    };
    $scope.expTitle = "Nivel de Habilidad: ";
    $scope.skills = {
        rubyOnRails: {
            skill: "Ruby On Rails",
            description: "Ruby On Rails es un framework de aplicaciones web de código abierto escrito en el lenguaje de programación Ruby, siguiendo el paradigma de la arquitectura Modelo Vista Controlador (MVC). Trata de combinar la simplicidad con la posibilidad de desarrollar aplicaciones del mundo real escribiendo menos código que con otros frameworks y con un mínimo de configuración.",
            logoURL: "http://www.webnified.com/img/tools/ror.png",
            experienceLevel: "Intermedio",
            experienceRate: "40%"
            
        },
        html5Skill: {
            skill: "HTML5",
            description: "HTM5 es la 5ta revision del lenguaje HTML, el lenguaje de programacion estandar para describir el contenido y la apariencia de las pagina Web. Una de las metas de HTML5 es soportar contenido multimedia en los dispositivos mobiles. HTML5 tambien incluye nuevas caracteristicas que realmente pueden cambiar la manera en que el usuario interactua con el documento.",
            logoURL: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png",
            experienceLevel: "Intermedio",
            experienceRate: "60%"
            
        },
        css3Skill: {
            skill: "CSS3",
            description: "CSS3 es la ultima version de la especificacion CSS. CSS3 no solo contiene todo lo incluido en CSS2.1, sino que tambien a&ntilde;ade nuevas caracteristicas que ayuda a los desarrolladores a solventar un nuero de problemas sin la necesidad de elementos no semanticos, complejos scripts, o imagenes extras.",
            logoURL: "http://logonoid.com/images/css3-logo.png",
            experienceLevel: "Intermedio",
            experienceRate: "60%"
        },
        foundationSkill: {
            skill: "Zurb Foundation",
            description: "Foundation es un framework de interfaz de usuario responsive. Foundation proporciona una cuadrícula responsive e incluye componentes de interfaz de usuario HTML y CSS, plantillas, y fragmentos de código. Foundation está mantenida por zurb.com y es un proyecto de código abierto.",
            logoURL: "img/zurb.png",
            experienceLevel: "Intermedio",
            experienceRate: "60%"
        },
        mdlSkill: {
            skill: "Material Design Lite",
            description: "Material Design es un lenguaje de diseño desarrollado por Google. Su objetivo es hacer una experiencia consistente a traves de todas las aplicaciones y plataformas de Google. Material Design Lite ofrece una variedad de componentes como botones, pestañas, sliders, campos de textos y mas.",
            logoURL: "http://1.bp.blogspot.com/-FCHtGNX1fEU/Va_GAH4DpXI/AAAAAAAABDk/kVGLaHpbG04/s1600/mdl.png",
            experienceLevel: "Principiante",
            experienceRate: "35%"
        },
        angularJSSkill: {
            skill: "AngularJS",
            description: "AngularJS es un framework de JavaScript de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página. Su objetivo es aumentar las aplicaciones basadas en navegador con capacidad de Modelo Vista Controlador (MVC), en un esfuerzo para hacer que el desarrollo y las pruebas sean más fáciles.",
            logoURL: "https://lh6.googleusercontent.com/-TlY7amsfzPs/T9ZgLXXK1cI/AAAAAAABK-c/Ki-inmeYNKk/w800-h800/AngularJS-Shield-large.png",
            experienceLevel: "Principiante",
            experienceRate: "20%"
        },
        linuxSkill: {
            skill: "Linux",
            description: "Linux es el Sistema Operativo open source más conocido y usado, por lo tanto existe una extensa comunidad de usuarios dispuesta a ayudar y contribuir aa este proyecto.",
            logoURL: "img/linux-logo.png",
            experienceLevel: "Intermedio",
            experienceRate: "50%"
        }
    };
    
    /* English */
    $scope.expTitleEng= "Skill Level: ";
    $scope.skillsEng = {
        rubyOnRails: {
            skill: "Ruby On Rails",
            description: "Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages. It encourages and facilitates the use of web standards such as JSON or XML for data transfer, and HTML, CSS and JavaScript for display and user interfacing. In addition to MVC, Rails emphasizes the use of other well-known software engineering patterns and paradigms, including convention over configuration (CoC), don't repeat yourself (DRY), and the active record pattern.",
            logoURL: "http://www.webnified.com/img/tools/ror.png",
            experienceLevel: "Intermediate",
            experienceRate: "60%"
        },
        html5Skill: {
            skill: "HTML5",
            description: "HTML 5 is a revision of the Hypertext Markup Language (HTML), the standard programming language for describing the contents and appearance of Web pages. One of the design goals for HTML5 is to support for multimedia on mobile devices. New syntactic features were introduced to support this, such as video, audio and canvas tags. ",
            logoURL: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png",
            experienceLevel: "Intermediate",
            experienceRate: "60%"
            
        },
        css3Skill: {
            skill: "CSS3",
            description: "CSS3 is the latest version of the CSS specification. The term “CSS3” is not just a reference to the new features in CSS, but the third level in the progress of the CSS specification. CSS3 contains just about everything that’s included in CSS2.1 (the previous version of the specification). It also adds new features to help developers solve a number of problems without the need for non-semantic markup, complex scripting, or extra images.",
            logoURL: "http://logonoid.com/images/css3-logo.png",
            experienceLevel: "Intermediate",
            experienceRate: "60%"
        },
        foundationSkill: {
            skill: "Zurb Foundation",
            description: "Foundation is a responsive front-end framework. Foundation provides a responsive grid and HTML and CSS UI components. Foundation is maintained by ZURB and is an open source project.",
            logoURL: "../img/zurb.png",
            experienceLevel: "Intermediate",
            experienceRate: "60%"
        },
        mdlSkill: {
            skill: "Material Design Lite",
            description: "Material Design is a design language developed by Google. It aimed to make a consistent experience across all Google apps & platforms. Material Design Lite offers a variety of components such as buttons, cards, tabs, menus, sliders, text fields and more.",
            logoURL: "https://developers.google.com/web/tools/imgs/mdl-thumb.png",
            experienceLevel: "Beginner",
            experienceRate: "35%"
        },
        angularJSSkill: {
            skill: "AngularJS",
            description: "AngularJS is an open-source web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications. It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM) architectures, along with components commonly used in rich Internet applications.",
            logoURL: "https://lh6.googleusercontent.com/-TlY7amsfzPs/T9ZgLXXK1cI/AAAAAAABK-c/Ki-inmeYNKk/w800-h800/AngularJS-Shield-large.png",
            experienceLevel: "Beginner",
            experienceRate: "20%"
        },
        linuxSkill: {
            skill: "Linux",
            description: "Linux is the best known and most used open source Operating System, therefore there is a large user community willing to help and contribute to this project.",
            logoURL: "../img/linux-logo.png",
            experienceLevel: "Intermediate",
            experienceRate: "60%"
        }
    };
}]);