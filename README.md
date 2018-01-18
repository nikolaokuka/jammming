# Jammming
Client side app based on Spotify API

Currently, Jammming supports the ability to create one new playlist at a time and save it to Spotify.

Potential Jammming Features:
- Include preview samples for each track
- Add a loading screen while playlist is saving
- Update the access token logic to expire at exactly the right time, instead of setting expiration from when the user initiates their next search
- After user redirect on login, restoring the search term from before the redirect
- Ensure playlist information doesn't get cleared if a user has to refresh their access token
