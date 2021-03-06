import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import socialMediaReducer from './social-media/social-media.reducer';
import portfolioReducer from './portfolio/portfolio.reducer';
import portfolioModalReducer from './portfolio-modal/portfolio-modal.reducer';
import careerReducer from './career/career.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
};

const rootReducer = combineReducers ({
  socialMedia: socialMediaReducer,
  portfolio: portfolioReducer,
  portfolioModal: portfolioModalReducer,
  career: careerReducer
})

export default persistReducer(persistConfig, rootReducer);