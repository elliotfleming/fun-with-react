###
This is an example of a basic store.
Some changes in component logic are required
if switching from the Backbone store to this one.
###

EventEmitter = require('events').EventEmitter
Dispatcher   = require '../dispatcher/Dispatcher'
Constants    = require '../constants/Constants'
assign       = require 'react/lib/Object.assign'


CHANGE_EVENT = 'change'

_items = [
  {id: 1, category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {id: 2, category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {id: 3, category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {id: 4, category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {id: 5, category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {id: 6, category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
]


create = (item) ->
  id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36)
  _items[id]
    id: id
    category: item.category
    name: item.name
    price: item.price
    stocked: item.stocked

update = (id, updates) ->
  _items[id] = assign {}, _items[id], updates

destroy = (id) ->
  delete _items[id]


Store = assign {}, EventEmitter.prototype,

  get: ->
    _items

  emitChange: ->
    @emit CHANGE_EVENT

  addChangeListener: (callback) ->
    @on CHANGE_EVENT, callback

  removeChangeListener: (callback) ->
    @removeListener CHANGE_EVENT, callback


Dispatcher.register (payload) ->

  action = payload.action

  switch action.actionType
    when Constants.CREATE
      create action.item
    when Constants.UPDATE
      update action.id, item: action.item
    when Constants.DESTROY
      destroy action.id
    else
      true

  Store.emitChange()

  # No errors. Needed by promise in Dispatcher.
  true


module.exports = Store