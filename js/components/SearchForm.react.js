/**
 * @jsx React.DOM
 */

var React = require('react');
var SearchBox = require("./SearchBox.react");
var SearchControls = require("./SearchControls.react");

var SearchForm = React.createClass({

	render: function() {
		var SearchFormStyle = {
			display: "block",
			maxWidth: "572px",
			minWidth: "572px",
			margin: "auto",
			padding: "0 !important",
			whiteSpace: "nowrap"
		};
		return (
			<div>
				<form style={SearchFormStyle}>
					<SearchBox placeholder={this.props.placeholder}/>
					<SearchControls />
				</form>
			</div>
		);
	}

});

module.exports = SearchForm;