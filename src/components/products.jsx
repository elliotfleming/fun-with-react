/** @jsx React.DOM */

React = require('react');

var ProductCategoryRow = React.createClass({
  render: function() {
    return (<tr><th colSpan="2">{this.props.category}</th></tr>);
  }
});

var ProductRow = React.createClass({
  render: function() {
    if (this.props.empty) {
      return (
        <tr>
          <td className="danger" colSpan="2">No Results</td>
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

var ProductTable = React.createClass({
  render: function() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    }.bind(this));
    if (rows.length === 0) {
      rows.push(<ProductRow empty={true} key="null" />);
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

var SearchBar = React.createClass({
  handleChange: function() {
    this.props.onUserInput(
      this.refs.filterTextInput.getDOMNode().value,
      this.refs.inStockOnlyInput.getDOMNode().checked
    );
  },
  render: function() {
    return (
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={this.props.filterText}
            ref="filterTextInput"
            onChange={this.handleChange}
          />
        </div>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              value={this.props.inStockOnly}
              ref="inStockOnlyInput"
              onChange={this.handleChange}
            />
            Only show products in stock
          </label>
        </div>
      </form>
    );
  }
});

var FilterableProductTable = React.createClass({
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
        <div className="col-md-2">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">
                Products
              </h3>
            </div>
            <div className="panel-body">
              <SearchBar
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}
                onUserInput={this.handleUserInput}
              />
            </div>
            <ProductTable
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

module.exports = FilterableProductTable;