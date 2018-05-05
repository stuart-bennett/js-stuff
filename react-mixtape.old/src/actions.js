// @flow

import type { AddTrackToCurrentPlaylist } from 'actions/addTrackToCurrentPlaylist';
import type { PlaylistSelected } from 'actions/playlistSelected';
import type { SearchTermChanged } from 'actions/searchTermChanged';
import type { UserAuthenticated } from 'actions/userAuthenticated';

export const searchResultSelectedAsync = (s: SearchResult) =>
    (dispatch: any) => dispatch(s);

export type Action =
      UserAuthenticated
    | PlaylistSelected
    | AddTrackToCurrentPlaylist
    | SearchTermChanged

