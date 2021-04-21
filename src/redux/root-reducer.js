import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import socialMediaReducer from './social-media/social-media.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
};

const rootReducer = combineReducers ({
  socialMedia: socialMediaReducer
})

export default persistReducer(persistConfig, rootReducer);