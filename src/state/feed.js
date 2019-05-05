import { createSlice } from 'redux-starter-kit';
import { get } from '../lib/request';
import Logger from '../lib/logger';


const feedSlice = createSlice({
  slice: 'feed',
  initialState: {
    isLoading: false,
    error: null,
    byId: {},
    list: [],
  },
  reducers: {
    request: state => ({
      ...state,
      error: null,
      isLoading: true,
    }),
    success: (state, { payload: feedList }) => {
      const byId = {};
      const list = [];
      feedList.forEach((feedEl) => {
        byId[feedEl.id] = feedEl;
        list.push(feedEl.id);
      });

      return {
        ...state,
        byId,
        list,
        isLoading: false,
        error: null,
      };
    },
    error: (state, payload) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
  },
});
const {
  reducer,
  actions: {
    request,
    success,
    error,
  },
} = feedSlice;

export default reducer;

// Thunk to fetch feed from the API
export function fetchFeed() {
  return async (dispatch) => {
    dispatch(request());
    try {
      const response = await get('/v4/lpfeed');
      const responseObj = await response.json();

      if (response.ok) {
        dispatch(success(responseObj.data));
      } else {
        dispatch(error({ code: 'UNKNOWN_REQUEST_ERROR', meta: responseObj }));
      }
    } catch (e) {
      Logger.error(e);
      dispatch(error({ code: 'UNKNOWN_REQUEST_ERROR', meta: e.message }));
    }
  };
}

// state selector for use in UI
export function selectFeed(state) {
  const {
    byId,
    list,
    error: errorObj,
    isLoading,
  } = state.feed;

  return {
    list: list.map(id => byId[id]),
    error: errorObj,
    isLoading,
  };
}
