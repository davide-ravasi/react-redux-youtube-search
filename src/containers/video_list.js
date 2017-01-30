import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchWord } from '../actions/index';

class VideoList extends Component {


	renderList() {

		console.log(this.props.videos);

		if(this.props.videos.length > 0) {
			return this.props.videos[0].items.map((video) =>{
				return (

					<li>{video.snippet.title}</li>
				)
				
			});		
		}

		//this.props.setState({term: '',videos: ''});

	}
	
	render() {
		
		return (
			<div className="col-md-8">
				<ul>
					{this.renderList()}
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