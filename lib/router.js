
Router.configure({
//  loadingTemplate: "loading",
//  waitOn: function(){//...},
//  onAfterAction: function(){//...}
});


 Router.route("/", {
   controller: 'MainController'
 });
//
 MainController = RouteController.extend({
  template: 'mainPage',
  layoutTemplate: 'layout'
});
Router.route("/test", {
  template: 'test',
  layoutTemplate: 'layout'
});
