import { createSlice } from 'redux-starter-kit';
import { get } from '../lib/request';
import Logger from '../lib/logger';


const feedSlice = createSlice({
  slice: 'upcomingEvent',
  initialState: {
    isLoading: false,
    error: null,
    data: null,
  },
  reducers: {
    request: state => ({
      ...state,
      error: null,
      isLoading: true,
    }),
    success: (state, { payload: eventObj }) => ({
      ...state,
      isLoading: false,
      data: eventObj,
    }),
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

export function fetchUpcomingEvent() {
  return async (dispatch) => {
    dispatch(request());
    try {
      const response = await get('/v4/event');
      const responseObj = await response.json();

      if (response.ok && responseObj.data.length > 0) {
        dispatch(success(responseObj.data[0]));
      } else {
        dispatch(error({ code: 'UNKNOWN_REQUEST_ERROR', meta: responseObj }));
      }
    } catch (e) {
      Logger.error(e);
      dispatch(error({ code: 'UNKNOWN_REQUEST_ERROR', meta: e.message }));
    }
  };
}

export function selectUpcomingEvent(state) {
  const {
    data,
    error: errorObj,
    isLoading,
  } = state.upcomingEvent;
  return {
    data,
    error: errorObj,
    isLoading,
  };
}
