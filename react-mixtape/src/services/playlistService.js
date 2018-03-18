// @flow
import type { Playlist, PlaylistTrack } from 'models/playlist.types';
import {getOrDefault} from 'utils/either'
import {
    createPlaylist,
    updatePlaylistTracks
} from 'http/spotifyApi'

function savePlaylist(request: SavePlaylistRequest)
    : Promise<Playlist> {

    let {playlist, userId, token} = request;
    if (playlist.isNew) {
        return createPlaylist(playlist, userId, token).then(e => {
            // use the playlist that came back
            // in response as it will have a
            // generated id on it
            playlist = getOrDefault(e, playlist);
            return saveTracks(playlist, userId, token);
        }).then(() => playlist);
    } else {
        return updatePlaylistTracks(
            playlist.id,
            userId,
            playlist.tracks,
            token).then(() => playlist);
    }
}

function saveTracks(p: Playlist, userId: string, token: string)
    : HttpResult<Array<PlaylistTrack>> {

    return updatePlaylistTracks(
        p.id,
        userId,
        p.tracks,
        token);
}

export default savePlaylist;
