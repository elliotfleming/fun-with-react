/** @jsx React.DOM */

React = require('react');

var Product = React.createClass({

  render: function() {

    if (this.props.empty) {
      return (
        <tr>
          <td className="danger text-danger" colSpan="2">No Results</td>
        </tr>
      )
    }

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

module.exports = Product;