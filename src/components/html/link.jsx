/** @jsx React.DOM */

React = require('react');

var Link = React.createClass({

  propTypes: {
    href: React.PropTypes.string.isRequired
  },

  render: function() {
    return <a {...this.props}>{this.props.children}</a>;
  }

});

module.exports = Link;