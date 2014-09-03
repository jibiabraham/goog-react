/**
 * @jsx React.DOM
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;
var SearchBox = require("./SearchBox.react");
var SearchControls = require("./SearchControls.react");

var SearchForm = React.createClass({

	propTypes: {
		query: ReactPropTypes.string
	},

	getInitialState: function(){
		return {
			query: this.props.query || ""
		};
	},

	render: function() {
		return (
			<form className="block width-572 auto-margin zero-padding nowrap">
				<SearchBox query={this.props.query}/>
				<SearchControls />
			</form>
		);
	}

});

module.exports = SearchForm;