import { createSelector } from 'reselect';

const selectSocialMedia = state => state.socialMedia;

export const selectSocialMediaCompany = createSelector(
  [selectSocialMedia],
  socialMedia => socialMedia.company
)