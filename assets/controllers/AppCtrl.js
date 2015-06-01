/**
 * Created by alexfaber on 6/1/15.
 */
mainControllers.controller('AppCtrl', function($scope, $ionicModal, $timeout, apiHelper) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    //loginData = { username: "username", password: "password" }
    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        //Check to see if user has supplied both username and password, if so, remember them
        var username = $scope.loginData.username;
        var password = $scope.loginData.password;
        if(username && password){
            var basicEncoded = "Basic " + btoa(username + ":" + password);
            apiHelper.setBasicEncoded(basicEncoded);
            $scope.closeLogin();
        }else{
            alert("Please Provide Both a Username and a Password");
        }
    };
});