/**
 * @jsx React.DOM
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;

var SearchBox = React.createClass({

	propTypes: {
		value: ReactPropTypes.string,
		placeholder: ReactPropTypes.string
	},

	getInitialState: function(){
		return {
			value: this.props.value || ""
		};
	},

	render: function() {
		return (
			<fieldset>
				<div className="search-box-containter position-relative ensure-border-box overflow-hidden height-100pc">
					<input className="dark-grey size-16 search-box"
						name="q" autoComplete="off" spellCheck="false"
						placeholder={this.props.placeholder}
						onChange={this.onChange}
						value={this.state.value} />
				</div>
			</fieldset>
		);
	},

	onChange: function(e){
		this.setState({
			value: e.target.value
		});
	}
});

module.exports = SearchBox;