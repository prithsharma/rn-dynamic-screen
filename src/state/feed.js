import { get } from '../lib/request';
import Logger from '../lib/logger';


// eslint-disable-next-line import/prefer-default-export
export async function fetchFeed() {
  try {
    const response = await get('/v4/event');
    const responseObj = await response.json();
    Logger.info(responseObj);
  } catch (e) {
    Logger.info(e);
  }
}

fetchFeed();
