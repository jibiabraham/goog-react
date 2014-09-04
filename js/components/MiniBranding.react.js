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

		);
	}

});

module.exports = MiniBranding;