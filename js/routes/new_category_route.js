var category = require('../models/category');

var NewCategoryRoute = Ember.Route.extend({

  renderTemplate: function() {
    this.render('edit_category', {controller: 'new_category'});
  },

  model: function() {
    return category.createRecord();
  },

  deactivate: function() {
    var model = this.get('controller.model');
    if (!model.get('isSaving')) {
      model.deleteRecord();
    }
  }

});

module.exports = NewCategoryRoute;

