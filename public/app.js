angular.module( "CoderFriends", [ "ui.router" ] )

.config( ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( "/" );

  $stateProvider
    .state( "/", {
      url: "/"
      , templateUrl: "./index.html"
    } )
    .state( "home", {
      url: "/home"
      , templateUrl: "./templates/home.html"
    } )
    .state( "friend", {
      url: "/friend/:github_username"
      , templateUrl: "./templates/friend.html"
    } )
} );
