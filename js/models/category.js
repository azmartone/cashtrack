var Category = DS.Model.extend({

  title: DS.attr('string'),
  
  transaction: DS.belongsTo('transaction')

});

module.exports = Category;

