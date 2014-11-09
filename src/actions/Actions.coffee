Dispatcher = require '../dispatcher/Dispatcher'
Constants = require '../constants/Constants'

Actions =

  ###
  @param {string} item
  ###
  create: (item) ->
    Dispatcher.handleViewAction
      actionType: Constants.CREATE
      item: item

  ###
  @param {string} id
  @param {string} item
  ###
  update: (id, item) ->
    Dispatcher.handleViewAction
      actionType: Constants.UPDATE_TEXT
      id: id
      item: item

  ###
  @param {string} id
  ###
  destroy: (id) ->
    Dispatcher.handleViewAction
      actionType: Constants.DESTROY
      id: id

module.exports = Actions;