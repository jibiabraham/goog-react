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
			<fieldset className="search-box-fieldset zero-margin one-flex">
				<div className="inline-block width-100pc valign-top">
					<div className="search-box-activity-monitor white-bg ensure-border-box position-relative">
						<div className="position-absolute place-at-origin height-100pc width-100pc">
							<div className="white-bg ensure-border-box search-box-height valign-top">
								<div className="ensure-border-box search-box-padding overflow-hidden height-100pc">
									<div className="position-relative">
										<input className="dark-grey size-16 search-box"
											name="q" autoComplete="off" 
											type="text" spellCheck="false"
											placeholder={this.props.placeholder}
											onChange={this.onChange}
											value={this.state.value} />
									</div>
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