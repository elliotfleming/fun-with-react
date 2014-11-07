/** @jsx React.DOM */

React = require('react');
Link = require('./html/link');
Timer = require('./timer');

Header = React.createClass({

  getDefaultProps: function() {
    return {
      title: 'Title',
      path: '/'
    };
  },

  render: function() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-brand">
            <Link href={this.props.path}>
              {this.props.title}
            </Link>
          </div>
          <p className="navbar-text navbar-right">
            <Timer />
          </p>
        </div>
      </nav>
    );
  }
});

module.exports = Header;