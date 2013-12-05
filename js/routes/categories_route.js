var Category = require('../models/category');

var CategoryRoute = Ember.Route.extend({

  model: function() {
    return Category.find();
  }

});

module.exports = CategoryRoute;

