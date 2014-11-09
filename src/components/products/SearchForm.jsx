/** @jsx React.DOM */

React = require('react');

var SearchForm = React.createClass({

  propTypes: {
    filterText: React.PropTypes.string.isRequired,
    inStockOnly: React.PropTypes.bool.isRequired,
    onUserInput: React.PropTypes.func.isRequired
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
            onChange={this._onChange}
            autoFocus={true}
          />
        </div>
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              checked={this.props.inStockOnly}
              ref="inStockOnlyInput"
              onChange={this._onChange}
            />
            Only show products in stock
          </label>
        </div>
      </form>
    );
  },

  _onChange: function() {
    this.props.onUserInput(
      this.refs.filterTextInput.getDOMNode().value,
      this.refs.inStockOnlyInput.getDOMNode().checked
    );
  }

});

module.exports = SearchForm;