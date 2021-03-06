import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchWord } from '../actions/index';

class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = {term: ''};


		this.onSearchChange = this.onSearchChange.bind(this);
		this.onSubmitForm = this.onSubmitForm.bind(this);

		this.props.searchWord('banana');

	}

	onSearchChange(event) {
		this.setState({term: event.target.value});
	}

	onSubmitForm(event) {
		event.preventDefault();
		this.props.searchWord(this.state.term);
	}
	
	render() {
		return (
			<div className="col-md-12 search-bar">
				<form className="form-inline" onSubmit={this.onSubmitForm}>
					<div className="form-group">
						<label className="sr-only" for="exampleInputEmail3">Seach video</label>
						<input type="text" className="form-control" onChange={this.onSearchChange} id="videoSearch" placeholder="Search video" />
					</div>
					<button type="submit" className="btn btn-secondary">Search</button>
				</form>
			</div>
		);
	}
}


// send action results to props in container
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ searchWord }, dispatch);
}

// connect function dispatch to searchBar component
export default connect(null, mapDispatchToProps)(SearchBar);


/*
TO CONNECT COMPONENT WITH ACTION CREATOR

1 - import { connect }
2 - import action creator
3 - import bind action creator
3 - create function mapDispatchToProps
4 - connect component with action

*/


