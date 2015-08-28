// Create example user on startup
Meteor.startup(function() {

  if (!MU.Users.findOne()) {
    var user = {
      profile: {
        firstName: 'Ariel',
        lastName: 'Fuggini'
      },
      email: 'arielfuggini@gmail.com'
    };
    var newUser = Accounts.createUser(user);
  };

});

// Example only. You should NEVER publish all users' data.
Meteor.publish(null, function() {
  return MU.Users.find();
});
