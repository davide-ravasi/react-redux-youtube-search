import React, { Component } from 'react';


export default (props) => {
	return (
		<li className="list-group-item">
			<div className="media">
				<div className="media-left media-middle">
					<a href="#">
						<img className="media-object img-thumbnail" src={props.src} alt="..." />
					</a>
				</div>
				<div className="media-body">
					<h5 className="media-heading">{props.title}</h5>
					{props.description}
				</div>
			</div>

		</li>
	);
}