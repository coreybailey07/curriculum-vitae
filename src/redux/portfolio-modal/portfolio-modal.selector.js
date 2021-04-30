import { createSelector } from 'reselect';

const selectPortfolioModal = state => state.portfolioModal;

export const selectPortfolioModalItem = createSelector(
  [selectPortfolioModal],
  portfolioModal => portfolioModal.itemModal
)
