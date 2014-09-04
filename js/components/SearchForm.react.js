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
			<div>
				<div className="col-md-8 col-md-offset-2">
					<SearchBox />
				</div>
				<div className="col-md-8 col-md-offset-2">
					<SearchControls />
				</div>
			</div>
		);
	}

});

module.exports = SearchForm;