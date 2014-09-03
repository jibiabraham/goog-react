/**
 * Not rights reserved.
 * Go wild.
 * @jsx React.DOM
 */

var React = require("react");
var Viewport = require("./components/Viewport.react");

React.renderComponent(
	<Viewport />,
	document.getElementById("search-form")
);

// For React DevTools
window.React = React;