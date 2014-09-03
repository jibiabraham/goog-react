/**
 * @jsx React.DOM
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var MiniBranding = require("./MiniBranding.react");
var SearchBox = require("./SearchBox.react");
var ControlPanel = require("./ControlPanel.react");

var TopSearchPanel = React.createClass({

	propTypes: {
		hasQuery: ReactPropTypes.bool.isRequired
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
				<MiniBranding visible={this.state.hasQuery} />
				<SearchBox hasQuery={this.state.hasQuery}/>
			</section>
		);
	}

});

module.exports = TopSearchPanel;