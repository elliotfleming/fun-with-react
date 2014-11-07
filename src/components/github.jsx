/** @jsx React.DOM */

React = require('react');

var Github = React.createClass({

  propTypes: {
    source: React.PropTypes.string.isRequired
  },

  getInitialState: function() {
    return {
      username: '',
      url: '',
      avatar_url: ''
    };
  },

  componentDidMount: function() {
    $.get(this.props.source, function(result) {
      console.log(result);
      if (this.isMounted()) {
        this.setState({
          username: result.login,
          url: result.html_url,
          avatar_url: result.avatar_url
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <span>
        <img src={this.state.avatar_url} width="40" className="img-circle" style={{marginTop: -10}} />
      </span>
    );
  }
});

module.exports = Github;