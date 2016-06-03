/// <reference path="../typings/browser.d.ts" />
var AppCtrl = (function () {
    function AppCtrl($scope, $ionicModal, $timeout) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //$scope.$on('$ionicView.enter', function(e) {
        //});
        var _this = this;
        this.$scope = $scope;
        this.$ionicModal = $ionicModal;
        this.$timeout = $timeout;
        // Form data for the login modal
        this.loginData = {};
        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl("templates/login.html", {
            scope: this.$scope
        }).then(function (modal) {
            _this.modal = modal;
        });
    }
    // Triggered in the login modal to close it
    AppCtrl.prototype.closeLogin = function () {
        this.modal.hide();
    };
    // Open the login modal
    AppCtrl.prototype.login = function () {
        this.modal.show();
    };
    // Perform the login action when the user submits the login form
    AppCtrl.prototype.doLogin = function () {
        var _this = this;
        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        this.$timeout(function () {
            _this.closeLogin();
        }, 1000);
    };
    return AppCtrl;
}());
var PlaylistCtrl = (function () {
    function PlaylistCtrl($stateParams) {
        this.$stateParams = $stateParams;
        this.playlistId = $stateParams["playlistId"];
    }
    return PlaylistCtrl;
}());
var PlaylistsCtrl = (function () {
    function PlaylistsCtrl() {
        this.playlists = [{
                title: "Reggaeasdsad",
                id: 1
            }, {
                title: "Chill",
                id: 2
            }, {
                title: "Dubstep",
                id: 3
            }, {
                title: "Indie",
                id: 4
            }, {
                title: "Rap",
                id: 5
            }, {
                title: "Cowbell",
                id: 6
            }];
    }
    return PlaylistsCtrl;
}());
angular.module('starter.controllers', [])
    .controller('AppCtrl', AppCtrl)
    .controller('PlaylistCtrl', PlaylistCtrl)
    .controller('PlaylistsCtrl', PlaylistsCtrl);
//# sourceMappingURL=controllers.js.map