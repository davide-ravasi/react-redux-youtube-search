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

					<li className="list-group-item">
						<div className="media">
							<div className="media-left media-middle">
								<a href="#">
									<img className="media-object img-thumbnail" src={video.snippet.thumbnails.default.url} alt="..." />
								</a>
							</div>
							<div className="media-body">
								<h5 className="media-heading">{video.snippet.title}</h5>
								{video.snippet.description}
							</div>
						</div>

					</li>
				)
				
			});		
		}

	}
	
	render() {
		
		return (
			<div className="col-md-8">
				<ul className="list-group">
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