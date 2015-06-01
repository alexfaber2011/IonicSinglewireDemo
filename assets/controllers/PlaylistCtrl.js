/**
 * Created by alexfaber on 6/1/15.
 */
mainControllers.controller('PlaylistCtrl', function($scope, $stateParams, $resource) {
    var songs = $resource("http://104.236.94.200:5555/challenges/demo", {limit: 10});
    var initialized = false;

    //Fires each time the view is revealed (Ionic Changed this recently due to their new caching system)
    $scope.$on('$ionicView.enter', function(e) {

        //alert($stateParams.playlistId);

        if(!initialized) {
            songs.query().$promise.then(function (songs) {
                initialized = true;
                $scope.songs = songs;
            }).catch(function (error) {
                console.error(error);
            });
        }
    });
});