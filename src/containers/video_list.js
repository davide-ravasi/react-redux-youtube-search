import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchWord, selectBook } from '../actions/index';
import VideoPlayer from '../components/video_player';
import ListElement from '../components/list_element';

class VideoList extends Component {

	renderList() {
		if(this.props.videos.length > 0) {
			return this.props.videos[0].items.map((video) =>{
				return (
					<li className="list-group-item" onClick={() => this.props.selectBook(video)} >
						<ListElement title={video.snippet.title} description={video.snippet.description} src={video.snippet.thumbnails.default.url}></ListElement>
					</li>
				)
			}

			);		
		}
	}
	
	render() {
		return (	
		<div className="row">	
			<VideoPlayer videoId={this.props.selectedVideo}></VideoPlayer> 
			<div className="col-md-7">
				<ul className="list-group">
					{this.renderList()}
				</ul>
			</div>
		</div>
		);
	}
}

function mapStateToProps(state) {

	return {
		videos: state.videos,
		selectedVideo: state.selectedVideo
	};
}


// send action results to props in container
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ searchWord, selectBook }, dispatch);
}

// connect function dispatch to searchBar component
export default connect(mapStateToProps, mapDispatchToProps)(VideoList);