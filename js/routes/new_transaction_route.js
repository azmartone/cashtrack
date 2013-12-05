var transaction = require('../models/transaction');

var NewTransactionRoute = Ember.Route.extend({

  renderTemplate: function() {
    this.render('edit_transaction', {controller: 'new_transaction'});
  },

  model: function() {
    return transaction.createRecord();
  },

  deactivate: function() {
    var model = this.get('controller.model');
    if (!model.get('isSaving')) {
      model.deleteRecord();
    }
  }

});

module.exports = NewTransactionRoute;

