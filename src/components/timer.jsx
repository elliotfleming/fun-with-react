/** @jsx React.DOM */

React = require('react');
SetInterval = require('./mixins/SetInterval');

var Timer = React.createClass({

  mixins: [SetInterval],

  getInitialState: function() {
    return {seconds: 0};
  },

  componentDidMount: function() {
    this.setInterval(this.tick, 1000);
  },

  tick: function() {
    this.setState({seconds: this.state.seconds + 1});
  },

  render: function() {
    return (
      <span>
        React has been running for {this.state.seconds} seconds.
      </span>
    );
  }

});

module.exports = Timer;