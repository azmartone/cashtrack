var Transaction = require('../models/transaction');

var TransactionRoute = Ember.Route.extend({

  model: function() {
    return Transaction.find();
  }

});

module.exports = TransactionRoute;

