/**
 * No rights reserved.
 * Go wild.
 * @jsx React.DOM
 */

var React = require("react");
var ReactPropTypes = React.PropTypes;
var Header = require("./Header.react");

var CleanSlate = React.createClass({

	propTypes: {},

	render: function(){
		var contentBotPadding = {
			paddingBottom: "35px"
		};
		var contentPositioning = {
			margin: "0 auto",
			minWidth: "980px"
		};
		var centerContent = {
			textAlign: "center"
		};
		var searchBoxPlaceholderSpace = {
			height: "102px"
		};
		return (
			<div style={contentBotPadding}>
				<div style={contentPositioning}>
					<div style={centerContent}>
						{/*First sections handles the logo*/}
						<Header />

						{/*This section is space left for the search box*/}
						<div style={searchBoxPlaceholderSpace}></div>

						{/*Placeholder for language options*/}
						<div></div>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = CleanSlate;