import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlist: []
    };
		this.search = this.search.bind(this);
		this.addTrack = this.addTrack.bind(this);
		this.removeTrack = this.removeTrack.bind(this);
		this.changePlaylistName = this.changePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }

  search(term){
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults});
    });
  }

  changePlaylistName(name){
    this.setState({playlistName: name});
  }

  savePlaylist(){
    let trackURIs = this.state.playlist.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlist: []
      });
    });
  }

	addTrack(track){
  	let tracks = this.state.playlist;
  	if(!tracks.find(obj => obj.id === track.id)){
  		tracks.push(track);
  		this.setState({playlist: tracks});
  	}
	}

	removeTrack(track){
  	let tracks = this.state.playlist;
  	tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
  	this.setState({playlist: tracks});
	}

	render(){
  	return (
  		<div>
    		<h1>Ja<span className="highlight">mmm</span>ing</h1>
    		<div className="App">
	  			<SearchBar search={this.search} />
	  			<div className="App-playlist">
	    			<SearchResults  searchResults={this.state.searchResults} 
	                    			addTrack={this.addTrack} 
	    			/>
	    			<Playlist 	playlistName={this.state.playlistName} 
	              				playlist={this.state.playlist} 
	              				removeTrack={this.removeTrack} 
	              				changePlaylistName={this.changePlaylistName} 
	              				savePlaylist={this.savePlaylist} 
	    			/>
	  			</div>
    		</div>
  		</div>
  	);
	}
}

export default App;