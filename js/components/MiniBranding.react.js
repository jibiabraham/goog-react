/**
 * @jsx React.DOM
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;

var MiniBranding = React.createClass({

	propTypes: {
		isVisible: ReactPropTypes.bool.isRequired
	},

	getInitialState: function(){
		return {
			isVisible: this.props.isVisible || false
		};
	},

	render: function() {
		return (
			<div className={"mini-branding-container width-127 zero-margin zero-flex" + (this.state.isVisible ? "" : " hidden")}>
				<div className="mini-branding">
				    <a className="goto" href="/webhp?tab=ww&amp;ei=O_QGVKS_GYLJuASevIGICQ&amp;ved=0CBgQ1S4" title="Go to Google Home">
				    	<span className="mini-logo"></span>
			    	</a>
				</div>
			</div>
		);
	}

});

module.exports = MiniBranding;