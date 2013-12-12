var Transaction = DS.Model.extend({

  description: DS.attr('string'),

  amount: DS.attr('number'),


  category: DS.attr('string')
  // category: DS.belongsTo('category')

});

module.exports = Transaction;

