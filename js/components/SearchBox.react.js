/**
 * No rights reserved.
 * Go wild.
 * @jsx React.DOM
 */

var React = require("react");
var ReactPropTypes = React.PropTypes;

var SearchBox = React.createClass({

	propTypes:{
		value: ReactPropTypes.string,
		placeholder: ReactPropTypes.string
	},

	getInitialState: function(){
		return {
			value: this.props.value || ""
		};
	},

	render: function(){
		var positionRelative = {position: "relative"};
		var boxStyles = {
			padding: "5px 9px 0;",
			boxSizing: "border-box",
			height: "100%",
			overflow: "hidden"
		};
		var sizing = {
			height: "27px",
			verticalAlign: "top",
			boxSizing: "border-box"
		};
		var overlordParent = {
			background: "#fff",
			backgroundClip: "padding-box",
			border: "1px solid #cdcdcd",
			borderColor: "rgba(0,0,0,.15)",
			height: "30px",
			boxSizing: "border-box"
		};
		var searchBoxStyles = {
			border: "none",
			padding: "0px",
			margin: "0px",
			height: "auto",
			width: "100%",
			position: "absolute",
			zIndex: 6,
			left: "0px",
			outline: "none",
			background: "url(data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw%3D%3D) transparent"
		};
		var imSoConfused = {
			position: "relative",
			borderRightWidth: "1px",
			background: "#fff",
			backgroundClip: "padding-box",
			border: "1px solid #cdcdcd",
			borderColor: "rgba(0,0,0,.15)",
			height: "30px",
			boxSizing: "border-box",
			verticalAlign: "top"
		};
		var confusedIsAnUnderstatement = {
			display: "inline-block",
			width: "100%",
			verticalAlign: "top"
		};
		var fieldSetStyles = {
			minWidth: 0,
			flex: "1 1 auto",
			border: "none",
			display: "inline-block",
			margin: 0,
			padding: 0,
			verticalAlign: "top",
			width: "100%",
			marginLeft: "0!important",
			marginRight: "0!important"
		};
		return (
			<fieldset style={fieldSetStyles} className="viewport">
				<div style={imSoConfused}>
					<div style={overlordParent}>
						<div style={sizing}>
							<div style={boxStyles}>
								<div style={positionRelative}>
									<input style={searchBoxStyles}
										name="q" 
										autoComplete="off" 
										spellCheck="false"
										onChange={this.onChange}
										placeholder={this.props.placeholder}
										value={this.state.value} />
								</div>
							</div>
						</div>
					</div>
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