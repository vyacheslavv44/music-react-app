export const ADD_TRACK = 'ADD_TRACK';

    export const addTrack = trackName => ({
 type: ADD_TRACK,
  payload: trackName
    });

    export default (state = [], action) => {
          switch (action.type) {
   case ADD_TRACK:
             return [
                    action.payload,
                    ...state
                 ];
            default:
              return state;
          }
}