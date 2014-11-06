/** @jsx React.DOM */

React = require('react');

var Category = React.createClass({

  render: function() {
    return (
      <tr>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    );
  }

});

module.exports = Category;