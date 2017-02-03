import React, { Component } from 'react';


export default (props) => {

	if(props.videoId == '') {
		var urlVideo = 'https://www.youtube.com/embed/'; 
		var videoTitle = 'No video selected';
		var videoDescr = '';
	} else {
		var urlVideo = 'https://www.youtube.com/embed/' + props.videoId[0].id.videoId; 

		var videoTitle = props.videoId[0].snippet.title;
		var videoDescr = props.videoId[0].snippet.description;
	}



	return (
		<div className="video-detail col-md-5">
			<h3>{videoTitle}</h3>
			<div className="embed-reponsive embed-responsive-16by9">
				<iframe width="420" height="315" src={urlVideo}>
				</iframe>
			</div>
			<div className="details">
				{videoDescr}
			</div>
		</div>
	)
}



