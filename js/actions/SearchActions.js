var AppDispatcher = require('../dispatcher/AppDispatcher');
var SearchConstants = require('../constants/SearchConstants');

var SearchActions = {

	isTyping: function(){
		AppDispatcher.handleViewAction({
			actionType: SearchConstants.SEARCH_TYPING
		});
	}

};

module.exports = SearchActions;