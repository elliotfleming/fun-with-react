/** @jsx React.DOM */

React   = require('react');
Actions = require('../../actions/Actions');

var ProductForm = React.createClass({

  propTypes: {
    product: React.PropTypes.object.isRequired
  },

  render: function() {

    var product = this.props.product;

    return (
      <form onSubmit={this._onSubmit}>
        <div className="form-group">
          <label className="sr-only" htmlFor="productCategoryInput">Category</label>
          <input
            type="text"
            id="productCategoryInput"
            className="form-control"
            placeholder="Product Category"
            value={product.category}
            ref="productCategoryInput"
            onChange={this._onChange}
          />
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="productNameInput">Name</label>
          <input
            type="text"
            id="productNameInput"
            className="form-control"
            placeholder="Product Name"
            value={product.name}
            ref="productNameInput"
            onChange={this._onChange}
          />
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="productPriceInput">Price</label>
          <div className="input-group">
            <span className="input-group-addon">$</span>
            <input
              type="text"
              id="productPriceInput"
              className="form-control"
              placeholder="X.XX"
              value={product.price}
              ref="productPriceInput"
              onChange={this._onChange}
            />
          </div>
        </div>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              id="productStockedCheckbox"
              checked={product.stocked}
              ref="productStockedCheckbox"
              onChange={this._onChange}
            />
            In Stock
          </label>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  },

  _onChange: function() {
    this.props.onUserInput({
      category: this.refs.productCategoryInput.getDOMNode().value,
      name: this.refs.productNameInput.getDOMNode().value,
      price: this.refs.productPriceInput.getDOMNode().value,
      stocked: this.refs.productStockedCheckbox.getDOMNode().checked
    });
  },

  _onSubmit: function(e) {
    e.preventDefault();
    var category = this.refs.productCategoryInput.getDOMNode().value.trim();
    var name = this.refs.productNameInput.getDOMNode().value.trim();
    var price = this.refs.productPriceInput.getDOMNode().value.trim();
    var stocked = this.refs.productStockedCheckbox.getDOMNode().checked;
    if (!category || !name || !price) {
      return;
    }
    Actions.create({
      category: category,
      name: name,
      price: price,
      stocked: stocked
    });
  }

});

module.exports = ProductForm;