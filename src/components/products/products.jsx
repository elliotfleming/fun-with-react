/** @jsx React.DOM */

React  = require('react');
Search = require('./search');
Table  = require('./table');


var Products = React.createClass({

  getInitialState: function() {
    return {
      filterText: '',
      inStockOnly: false
    };
  },

  handleUserInput: function(filterText, inStockOnly) {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    });
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
                onUserInput={this.handleUserInput}
              />
            </div>
            <Table
              products={this.props.products}
              filterText={this.state.filterText}
              inStockOnly={this.state.inStockOnly}
            />
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Products;