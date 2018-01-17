# Jammming
Client side app based on Spotify API

Currently, Jammming supports the ability to create one new playlist at a time and save it to Spotify. Updating an existing playlist is not supported. With over 5 million playlists created or edited daily on Spotify, this is key functionality to support.

This feature accomplishes the following:
- Displays a list of the current user's playlists
- Allows a user to select one of their existing playlists. The application will load the name of that playlist and the tracks of that playlist in the playlist panel.
- The user may update the name and/or the tracks of the playlist and click "SAVE PLAYLIST". When the user selects "SAVE PLAYLIST", Jammming will save the current version of the playlist to the user's Spotify account.
- If the user selects a different playlist while the current playlist has unsaved changes, Jammming will load and display the new playlist, and will not save the changes to the old playlist. If the user returns to the old playlist, Jammming will display Spotify's version of the playlist, not the edited version.

Other potential Jammming Features:
- Include preview samples for each track
- Add a loading screen while playlist is saving
- Update the access token logic to expire at exactly the right time, instead of setting expiration from when the user initiates their next search
- After user redirect on login, restoring the search term from before the redirect
- Ensure playlist information doesn't get cleared if a user has to refresh their access token
