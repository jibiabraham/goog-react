/**
 * Not rights reserved.
 * Go wild.
 * @jsx React.DOM
 */

var React = require("react");
var SearchForm = require("./components/SearchForm.react");

React.renderComponent(
	<SearchForm />,
	document.getElementById("base")
);

// For React DevTools
window.React = React;