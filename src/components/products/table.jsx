/** @jsx React.DOM */

React    = require('react');
Product  = require('./product');
Category = require('./category');

var Table = React.createClass({

  render: function() {

    var rows = [];
    var lastCategory = null;

    this.props.products.forEach(function(product, id) {

      if (!~product.name.toLowerCase().indexOf(this.props.filterText) || (!product.stocked && this.props.inStockOnly)) {
        return;
      }

      if (product.category !== lastCategory) {
        rows.push(<Category category={product.category} key={product.category} />);
      }

      rows.push(<Product product={product} key={id} />);

      lastCategory = product.category;

    }.bind(this));

    if (rows.length === 0) {
      rows.push(<Product empty={true} key="null" />);
    }

    return (
      <table className="table table-condensed">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }

});

module.exports = Table;