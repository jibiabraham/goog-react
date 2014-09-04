/**
 * @jsx React.DOM
 */

var React = require('react');
var ReactPropTypes = React.PropTypes;

var SearchControls = React.createClass({

  propTypes: {
    doctors: ReactPropTypes.bool,
    hospitals: ReactPropTypes.bool,
    specializations: ReactPropTypes.bool,
  },

  getInitialState: function() {
    return {
      doctors: this.props.doctors || true,
      hospitals: this.props.hospitals || false,
      specializations: this.props.specializations || false
    };
  },

  render: function() {
    return (
      <div>
        <label className="checkbox-inline">
          <input name="doctors" type="checkbox" onChange={this.toggleState.bind(this, "doctors")} checked={this.state.doctors} /> 
          <span>Doctors</span>
        </label>
        <label className="checkbox-inline">
          <input name="hospitals" type="checkbox" onChange={this.toggleState.bind(this, "hospitals")} checked={this.state.hospitals} />
          <span>Hospitals</span>
        </label>
        <label className="checkbox-inline">
          <input name="specializations" type="checkbox" onChange={this.toggleState.bind(this, "specializations")} checked={this.state.specializations} />
          <span>Specializations</span>
        </label>
      </div>
    );
  },

  toggleState: function(param, e){
    var t = {};
    t[param] = e.target.checked;
    this.setState(t);
  }

});

module.exports = SearchControls;