const clientId = '';
const redirectUri = 'http://nikolaokuka-jammming.surge.sh';
let token = '';

const Spotify = {
  getToken(){
    if(token) return token;
    const tokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if(tokenMatch && expiresInMatch){
      token = tokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => token = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return token;
    }else{
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
    }
  },

  async search(term){
    const token = Spotify.getToken();
    let response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {Authorization: `Bearer ${token}`}
    });
    let jsonResponse = await response.json();
    if(!jsonResponse.tracks) return [];
    return jsonResponse.tracks.items.map(track => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri
    }));
	},

  async savePlaylist(name, uris){
    if(!name || !uris.length) return;
    const token = Spotify.getToken();
    let response = await fetch(`https://api.spotify.com/v1/me`, {
      headers: {Authorization: `Bearer ${token}`}
    });
    let jsonResponse = await response.json();
    let userId = jsonResponse.id;
    response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
      headers: {Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'},
      method: 'POST',
      body: JSON.stringify({name: name})
    });
    jsonResponse = await response.json();
    let playlistId = jsonResponse.id;
    return await fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
      headers: {Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'},
      method: 'POST',
      body: JSON.stringify({uris: uris})
    });	
  }
};
 
export default Spotify;
