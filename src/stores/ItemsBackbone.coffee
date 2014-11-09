Dispatcher = require '../dispatcher/Dispatcher'
Constants  = require '../constants/Constants'
Backbone   = require 'backbone'

_items = [
  {id: 2, category: 'Sporting Goods', price: 9.99, stocked: true, name: 'Baseball'},
  {id: 1, category: 'Sporting Goods', price: 49.99, stocked: true, name: 'Football'},
  {id: 3, category: 'Sporting Goods', price: 29.99, stocked: false, name: 'Basketball'},
  {id: 4, category: 'Electronics', price: 99.99, stocked: true, name: 'iPod Touch'},
  {id: 5, category: 'Electronics', price: 399.99, stocked: false, name: 'iPhone 5'},
  {id: 6, category: 'Electronics', price: 199.99, stocked: true, name: 'Nexus 7'}
]

Item = Backbone.Model.extend({})

Collection = Backbone.Collection.extend

  model: Item

  comparator: (model) ->
    keys = ['category', 'name']
    (model.get key for key in keys)

Store = new Collection _items

Store.dispatchToken = Dispatcher.register (payload) ->

  action = payload.action

  switch action.actionType
    when Constants.CREATE
      Store.add action.item
    when Constants.UPDATE
      Store.add action.item,
        merge: true
    when Constants.DESTROY
      Store.remove action.item
    else true

  true

module.exports = Store