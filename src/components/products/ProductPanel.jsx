/** @jsx React.DOM */

React        = require('react');
SearchForm   = require('./SearchForm');
ProductTable = require('./ProductTable');
ProductStore = require('../../stores/Items');

var ProductsPanel = React.createClass({

  propTypes: {
    products: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      filterText: '',
      inStockOnly: false
    };
  },

  render: function() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">
            Products
          </h3>
        </div>
        <div className="panel-body">
          <SearchForm
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            onUserInput={this._onUserInput}
          />
        </div>
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  },

  _onUserInput: function(filterText, inStockOnly) {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    });
  }

});

module.exports = ProductsPanel;