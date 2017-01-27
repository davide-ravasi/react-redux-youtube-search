import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchWord } from '../actions/index';

class VideoList extends Component {


	constructor(props) {
		super(props);

		this.state = {
			videos: []
		};
	}

	renderList() {
		console.log('prova');
	}
	
	render() {
		console.log('inside video_list');
		console.log(this.props.videos);
		console.log('end video_list');
		return (
			<div className="col-md-8">
				<ul>
					{this.renderList}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {

	return {
		videos: state.videos
	};
}


// send action results to props in container
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ searchWord }, dispatch);
}

// connect function dispatch to searchBar component
export default connect(mapStateToProps, mapDispatchToProps)(VideoList);