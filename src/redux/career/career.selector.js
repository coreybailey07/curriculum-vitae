import { createSelector } from 'reselect';

const selectCareer = state => state.career;

export const selectCareerItem = createSelector(
  [selectCareer],
  career => career.item
)
