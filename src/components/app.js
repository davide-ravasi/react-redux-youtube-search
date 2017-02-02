import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from '../containers/search_bar';
import VideoList from '../containers/video_list';

export default class App extends Component {
  render() {
    return (
      <div>
      	<h1>Youtube Video Searcher</h1>
      	<SearchBar />
      	<div className="row">
      		<VideoList />
      	</div>
      </div>
    );
  }
}



// to do
// - list initial
// - detail video
