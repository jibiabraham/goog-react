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
      <div className="input-group">
        <input type="text" className="form-control" 
          onChange={this.onChange}
          value={this.state.value} 
          placeholder={this.props.placeholder}                     
          name="q" autoComplete="off" spellCheck="false"/>
        <span className="input-group-btn">
          <button className="btn btn-primary" type="button">
            <span className="glyphicon glyphicon-search"></span>
          </button>
        </span>
      </div>
    );
  },

  onChange: function(e){
    this.setState({
      value: e.target.value
    });
  }
});

 module.exports = SearchBox;