import { createSlice } from 'redux-starter-kit';
import { get } from '../lib/request';
import Logger from '../lib/logger';


const feedSlice = createSlice({
  slice: 'feed',
  initialState: {
    isLoading: false,
    error: null,
  },
  reducers: {
    request: state => ({
      ...state,
      isLoading: true,
    }),
    success: state => ({
      ...state,
      isLoading: false,
    }),
    error() { },
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

export function fetchFeed() {
  return async (dispatch) => {
    dispatch(request());
    try {
      const response = await get('/v4/event');
      const responseObj = await response.json();

      if (response.ok) {
        dispatch(success(responseObj.data));
      }
      dispatch(error({ data: 'UNKNOWN_REQUEST_ERROR' }));
    } catch (e) {
      Logger.error(e);
      dispatch(error({ data: 'UNKNOWN_REQUEST_ERROR', meta: e }));
    }
  };
}
