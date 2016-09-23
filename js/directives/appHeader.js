app.directive('appHeader', function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl:
'js/directives/header.html'
  }
});