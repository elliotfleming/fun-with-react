/** @jsx React.DOM */

React = require('react');
Link = require('./html/link');
Timer = require('./timer');
Github = require('./github');

Header = React.createClass({

  propTypes: {
    title: React.PropTypes.string,
    path: React.PropTypes.string
  },

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
          <div className="navbar-header">
            <Link href={this.props.path} className="navbar-brand">
              <Github source="https://api.github.com/users/elliotfleming" />
              {' ' + this.props.title}
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