import React, { Component } from 'react';


export default (props) => {

	console.log(props.videoId);

	let urlVideo = 'https://www.youtube.com/embed/' + props.videoId; 

	console.log(urlVideo);

	return (
		<div className="video-detail col-md-5">
			<h3>Video you choose</h3>
			<div className="embed-reponsive embed-responsive-16by9">
				<iframe width="420" height="315" src={urlVideo}>
				</iframe>
			</div>
			<div className="details">

			</div>
		</div>
	)
}



