app.controller('ContactController', function($scope, $http) {
    // create a blank object to handle form data.
    $scope.message = {};
    // calling our submit function.
    $scope.submitForm = function() {
        $http({
            method  : 'POST',
            url     : 'https://desolate-dusk-74533.herokuapp.com/api/v1/messages',
           // data    :  $httpParamSerializerJQLike($scope.message),
            data    :  {'message': $scope.message},
            //forms user object
            headers : {'Content-Type': 'application/json'}
        })
          .success(function(data) {
            if (data.message) {
                $scope.message.success = '<span>Su mensaje ha sido enviado exitosamente</span>';
                $scope.message.successEng = '<span>Your message has been sent successfully</span>';                
                $scope.message.name = '';
                $scope.message.email = '';
                $scope.message.subject = '';
                $scope.message.content = '';
            } else {
                $scope.message.success = '<span>Lo siento, su mensaje no pudo ser enviado</span>';
                $scope.message.successEng = '<span>Sorry, your message could not be sent</span>';  
            }
          });
        };
    });