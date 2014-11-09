Flux = require 'flux'
assign = require 'react/lib/Object.assign'

Dispatcher = assign new Flux.Dispatcher,

  handleViewAction: (action) ->
    @dispatch
      source: 'VIEW_ACTION'
      action: action

module.exports = Dispatcher