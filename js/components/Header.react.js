/**
 * No rights reserved.
 * Go wild.
 * @jsx React.DOM
 */

var React = require("react");
var ReactPropTypes = React.PropTypes;

var Header = React.createClass({

	props: {
		isVisible: ReactPropTypes.bool.isRequired
	},

	getInitialState: function(){
		return {
			isVisible: this.props.isVisible == void 0 ? true : false
		}
	},

	render: function(){
		var containerStyles = {
			height: "230px",
			marginTop: "20px"
		};
		var spacingForLogo = {
			paddingTop: "112px"
		};
		var logo = {
			background: "url(img/logo11w.png) no-repeat",
			backgroundSize: "269px 95px",
			height: "95px",
			width: "269px",
			margin: "0 auto"
		};
		var logoSubtext = {
			color: "#777",
			fontSize: "16px",
			fontWeight: "bold",
			position: "relative",
			left: "102px",
			top: "70px"
		};
		return (

			<div style={containerStyles}>
				<div style={spacingForLogo}>
					{/*Set logo as background on this element*/}
					<div style={logo}>
						<div style={logoSubtext}>
							{/*Set any sub text required here*/}
							India
						</div>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = Header;