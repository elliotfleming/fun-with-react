/** @jsx React.DOM */

React    = require('react');
Header   = require('./header');
Products = require('./products/Products');

React.render(
  <div className="container-fluid">
    <Header title="Fun with React" />
    <Products />
  </div>,
  document.getElementById('container')
);