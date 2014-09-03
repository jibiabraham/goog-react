/**
 * @jsx React.DOM
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var TopSearchPanel = require("./TopSearchPanel.react");
var HeroOverlay = require("./HeroOverlay.react");
var Footer = require("./Footer.react");

var Viewport = React.createClass({

	propTypes: {
		hasQuery: ReactPropTypes.bool.isRequired
	},

	getInitialState: function(){
		return {
			hasQuery: this.props.hasQuery || false
		}
	},

	render: function() {
		return (
			<section>
				<TopSearchPanel hasQuery={this.state.hasQuery} />
				<HeroOverlay display={!this.state.hasQuery} />
				<Footer />
			</section>
		);
	}

});

module.exports = Viewport;