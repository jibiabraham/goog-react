/**
 * @jsx React.DOM
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;

var SearchControls = React.createClass({

	props: {
		hasQuery: ReactPropTypes.bool.isRequired
	},

	getInitialState: function(){
		return {
			hasQuery: this.props.hasQuery || false
		}
	},

	render: function() {
		var containerStyles = {
			display: "block",
			textAlign: "center",
			height: 0
		};
		var searchBtnStyle = {
			margin: "16px 8px",
			border: "1px solid #dcdcdc",
			borderColor: "rgba(0,0,0,0.1)",
			color: "#444!important",
			fontSize: "11px",
			background: "linear-gradient(top,#f5f5f5,#f1f1f1)",
			filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#f5f5f5,endColorstr=#f1f1f1,GradientType=1)"
		};
		var searchBtnSpanStyle = {
			font: "bold 11px/27px Arial,sans-serif!important",
			verticalAlign: "top"
		};
		var searchBtnWithQuery = {
			border: "1px solid transparent",
			borderBottomLeftRadius: 0,
			borderTopLeftRadius: 0,
			height: "30px",
			margin: 0,
			outline: "none",
			padding: "0 0",
			width: "60px",
			boxShadow: "none",
			boxSizing: "border-box",
			background: "linear-gradient(top,#4387fd,#4683ea)",
			filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#4387fd,endColorstr=#4683ea,GradientType=1)"
		};
		var searchBtnSpanWithQueryStyle = {
			backgroundPosition: "-69px -349px",
			display: "inline-block",
			margin: "-1px",
			height: "30px",
			width: "30px",
			backgroundImage: "url('//ssl.gstatic.com/gb/images/v1_2e543709.png')",
			backgroundSize: "112px 1828px"
		};
		return (
			<div style={containerStyles}>
				<button style={this.props.hasQuery ? searchBtnWithQuery : searchBtnStyle}>
					<span style={this.props.hasQuery ? searchBtnSpanWithQueryStyle : searchBtnSpanStyle}>Google Search</span>
				</button>
			</div>
		);
	}

});

module.exports = SearchControls;