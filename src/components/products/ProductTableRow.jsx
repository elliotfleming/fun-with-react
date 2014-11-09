/** @jsx React.DOM */

React = require('react');

var ProductTableRow = React.createClass({

  propTypes: {
    product: React.PropTypes.object.isRequired
  },

  render: function() {

    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }

});

module.exports = ProductTableRow;