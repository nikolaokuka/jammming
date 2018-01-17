import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e){
    this.props.changePlaylistName(e.target.value);
  }

  render(){
    return (
      <div className="Playlist">
        <input  defaultValue={'New Playlist'} onChange={this.handleNameChange} />
        <TrackList  isRemoval={true} tracks={this.props.playlist} removeTrack={this.props.removeTrack} />
        <a className="Playlist-save" onClick={this.props.savePlaylist}>SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;