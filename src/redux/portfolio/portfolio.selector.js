import { createSelector } from 'reselect';

const selectPortfolio = state => state.portfolio;

export const selectPortfolioItem = createSelector(
  [selectPortfolio],
  portfolio => portfolio.item
)
