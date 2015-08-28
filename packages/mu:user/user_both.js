MU.Users = Meteor.users;
MU.User = {};

// Declare some methods
MU.User.isLoggedIn = function() {
  return !!Meteor.user();
};
// MU.User.isLoggedIn() = true/false

// TRANSFORM CLASSES
// Add common logic
MU.User.class = function(doc) {
  _.extend(this, doc);
};

MU.User.transform = function(doc) {
  return new MU.User.class(doc);
};


MU.User.get = function(id) {
  return MU.Users.findOne(id, {
    transform: MU.User.transform
  });
};

MU.User.list = function() {
  return MU.Users.find({}, {
    transform: MU.User.transform
  });
};

_.extend(MU.User.class.prototype, {
  email: function() {
    return this.emails[0].address;
  },
  fullName: function() {
    return this.profile.firstName + " " + this.profile.lastName;
  }
});

/*
  Then I can do:

  MU.User.get('xxxxxxxxx').email()

  Or in a template:

  {{#with MU.User.get _id}}
    Email is {{email}}
  {{/with}}
*/
