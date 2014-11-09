/** @jsx React.DOM */

React                   = require('react');
ProductTableRow         = require('./ProductTableRow');
ProductTableCategoryRow = require('./ProductTableCategoryRow');

var ProductTable = React.createClass({

  propTypes: {
    products: React.PropTypes.object.isRequired,
    filterText: React.PropTypes.string.isRequired,
    inStockOnly: React.PropTypes.bool.isRequired
  },

  render: function() {

    var rows = [];
    var lastCategory = null;

    this.props.products.forEach(function(product, id) {

      product = product.attributes;

      var noMatch = !~product.name
        .toLowerCase()
        .indexOf(
          this.props.filterText.toLowerCase()
        );
      var notInStock = !product.stocked && this.props.inStockOnly

      if (noMatch || notInStock) return;

      if (product.category !== lastCategory) {
        rows.push(<ProductTableCategoryRow category={product.category} key={product.category + id} />);
      }

      rows.push(<ProductTableRow product={product} key={id} />);

      lastCategory = product.category;

    }.bind(this));

    if (rows.length === 0) {
      return (
        <div className="panel-body text-danger text-center">
          <b>No Results</b>
        </div>
      );
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

module.exports = ProductTable;