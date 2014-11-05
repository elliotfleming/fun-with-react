/** @jsx React.DOM */

React = require('react');

var Hello = React.createClass({
    render: function() {
        return <h1>Fun with {this.props.name}</h1>;
    }
});

React.render(<Hello name="React" />, document.getElementById('container'));
