/**
 * @jsx React.DOM
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var MiniBranding = require("./MiniBranding.react");
var SearchForm = require("./SearchForm.react");
var ControlPanel = require("./ControlPanel.react");

var TopSearchPanel = React.createClass({

	propTypes: {
		hasQuery: ReactPropTypes.bool.isRequired,
		query: ReactPropTypes.string
	},

	getInitialState: function(){
		return {
			hasQuery: this.props.hasQuery || false
		};
	},

	render: function() {
		return (
			<section>
				<ControlPanel expanded={!this.state.hasQuery} />
				<MiniBranding isVisible={this.state.hasQuery} />
				<SearchForm query={this.props.query}/>
			</section>
		);
	}

});

module.exports = TopSearchPanel;