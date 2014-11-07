/** @jsx React.DOM */

React         = require('react');
Search        = require('./search');
SearchResults = require('./searchResults');


var Products = React.createClass({

  propTypes: {
    products: React.PropTypes.array.isRequired
  },

  getInitialState: function() {
    return {
      filterText: '',
      inStockOnly: false
    };
  },

  render: function() {
    return (
      <div className="row">
        <div className="col-md-3">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">
                Products
              </h3>
            </div>
            <div className="panel-body">
              <Search
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}
                onUserInput={this._onUserInput}
              />
            </div>
            <SearchResults
              products={this.props.products}
              filterText={this.state.filterText}
              inStockOnly={this.state.inStockOnly}
            />
          </div>
        </div>
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

module.exports = Products;