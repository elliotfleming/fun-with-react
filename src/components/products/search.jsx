/** @jsx React.DOM */

React = require('react');

var Search = React.createClass({

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

module.exports = Search;