/**
 * @jsx React.DOM
 */

var React = require('react');
var SearchForm = require("./SearchForm.react");
var Header = require("./Header.react");
var CleanSlate = require("./CleanSlate.react");

var ViewPort = React.createClass({

	render: function() {
		var vpStyles = {
			minHeight: "100%",
			position: "relative",
			width: "100%",
			margin: "0 auto",
			minWidth: "980px"
		};
		var absoluteContainer = {
			left: 0,
			top: 0,
			position: "absolute",
			width: "100%"
		};
		var relativeContainer = {
			background: "transparent",
			borderBottomColor: "transparent",
			whiteSpace: "nowrap",
			display: "-webkit-flex",
			display: "flex",
			marginLeft: "0!important",
			marginRight: "0!important",
			font: "13px/27px Arial,sans-serif",
			position: "relative",
			height: "60px",
			width: "100%"
		};
		var topControlsSpacer = {
			minWidth: "200px",
			position: "static",
			width: 0,
			flex: "0 2 auto",
			height: "60px",
			lineHeight: "58px",
			verticalAlign: "middle",
			marginLeft: "0!important",
			marginRight: "0!important",
			display: "inline-block"
		};
		var iDontKnowWhyThisIsHere = {
			height: 0,
			position: "absolute",
			left: 0,
			top: 0,
			width: "100%",
			lineHeight: "normal",
			whiteSpace: "nowrap"
		};
		var searchBoxPositioner = {
			margin: 0,
			marginLeft: "0 !important",
			paddingTop: 0,
			position: "relative",
			top: "243px"
		};
		return (
			<div style={vpStyles}>
				<div>
					<div style={absoluteContainer}>
						<div style={relativeContainer}>
							<div style={topControlsSpacer}>
								<div style={iDontKnowWhyThisIsHere}>
									<div style={searchBoxPositioner}>
										<SearchForm />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<CleanSlate />
			</div>
		);
	}

});

module.exports = ViewPort;