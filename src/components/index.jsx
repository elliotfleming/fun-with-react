/** @jsx React.DOM */

React        = require('react');
Header       = require('./header');
Products     = require('./products/products');
ProductStore = require('../stores/products.js');

React.render(
  <div className="container-fluid">
    <Header />
    <Products products={ProductStore} />
  </div>,
  document.getElementById('container')
);