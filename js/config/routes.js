var App = require('./app');

App.Router.map(function() {

  // generated by ember-generate --scaffold
  this.resource('categories');
  this.resource('category', {path: '/categories/:category_id'});
  this.route('edit_category', {path: '/categories/:category_id/edit'});
  this.route('new_category', {path: '/categories/new'});
  // end generated routes


  // generated by ember-generate --scaffold
  this.resource('transactions');
  this.resource('transaction', {path: '/transactions/:transaction_id'});
  this.route('edit_transaction', {path: '/transactions/:transaction_id/edit'});
  this.route('new_transaction', {path: '/transactions/new'});
  // end generated routes


});
