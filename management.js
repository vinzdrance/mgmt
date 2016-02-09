if (Meteor.isClient) {

//  Clients.join(Playlists, "PlaylistId", "playlists", ["prettyname"]);





}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
// Playlists.remove({});

  });

  Meteor.publish('allPlaylists', function () {
      Counts.publish(this, 'totalPlaylists', Playlists.find());
  });
  Meteor.publish('allClients', function () {
      Counts.publish(this, 'totalClients', Clients.find());
  });

  // Global API configuration
  var Api = new Restivus({
    useDefaultAuth: true,
    prettyJson: true
  });

  // Generates: GET, POST on /api/playlists and GET, PUT, DELETE on
  // /api/playlists/:id for the Items collection
  Api.addCollection(Playlists);

  // Generates: GET, POST on /api/clients and GET, PUT, DELETE on
  // /api/clients/:id for the Items collection
  Api.addCollection(Clients);

  Api.addRoute('/playlists', {
  get: function () {
  //  var id = this.urlParams._id;
    var query = this.queryParams; // query.q -> "liked"
  }
});



}
