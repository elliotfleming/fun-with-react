/** @jsx React.DOM */

React        = require('react');
ProductForm  = require('./ProductForm');
ProductPanel = require('./ProductPanel');
ProductStore = require('../../stores/ItemsBackbone');

var getState = function() {
  return {
    products: ProductStore,
    product: {
      id: null,
      category: '',
      name: '',
      price: '',
      stocked: false
    }
  };
}

var Products = React.createClass({

  getInitialState: function() {
    return getState();
  },

  componentDidMount: function() {
    ProductStore.on('add remove reset', this._onChange);
  },

  componentWillUnmount: function() {
    ProductStore.off('add remove reset', this._onChange);
  },

  render: function() {
    return (
      <div className="row">
        <div className="col-md-3">
          <div className="panel panel-success">
            <div className="panel-heading">
              <h3 className="panel-title">
                New Product
              </h3>
            </div>
            <div className="panel-body">
              <ProductForm
                product={this.state.product}
                onUserInput={this._onUserInput}
              />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <ProductPanel products={this.state.products} />
        </div>
      </div>
    );
  },

  _onUserInput: function(product) {
    this.setState({
      product: {
        category: product.category,
        name: product.name,
        price: product.price,
        stocked: product.stocked
      }
    });
  },

  _onChange: function() {
    this.setState(getState());
  },

});

module.exports = Products;