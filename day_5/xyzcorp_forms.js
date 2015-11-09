(function(angular){
  "use strict";
  var tplString = "<form><label for='offenderName'>Offender Name:</label>"+
                  "<input/></form>"
  angular
    .module('xyzcorpForms', [])
    .directive('xyzcorpOffenderForm', function() {
      return {
        template: tplString
      }
    })

})(angular);
