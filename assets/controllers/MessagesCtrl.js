/**
 * Created by alexfaber on 6/1/15.
 */
mainControllers.controller('MessagesCtrl', function($scope, $stateParams, $resource, apiHelper) {
    var messages = $resource(apiHelper.getBaseURL() + "Messages/", {}, {
        get:{
            method: 'GET',
            isArray: false,
            headers: {'Authorization': apiHelper.getBasicEncoded()}
        }
    });

    //Fires each time the view is revealed (Ionic Changed this recently due to their new caching system)
    $scope.$on('$ionicView.enter', function(e) {
        messages.get().$promise.then(function (fetchedMessages) {
            console.log('[MessagesCtrl] fetchedMessages: ' + JSON.stringify(fetchedMessages));
            $scope.messages = fetchedMessages.data;
        }).catch(function (error) {
            console.error(error);
        });
    });
});