/** @jsx React.DOM */

React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-brand">
            Fun with React
          </div>
        </div>
      </nav>
    );
  }
});