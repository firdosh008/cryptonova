// src/components/SaveItemToWatchlist.tsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addToWatchlist } from '../utils/redux/slices/watchlistSlice';
import { AppDispatch, RootState } from '../utils/redux/store';

interface SaveItemToWatchlistProps {
  e: React.MouseEvent<HTMLButtonElement>;
  id: string;
}

export const SaveItemToWatchlist: React.FC<SaveItemToWatchlistProps> = ({ e, id }) => {
  e.preventDefault();
  const dispatch = useDispatch<AppDispatch>();
  const watchlist = useSelector((state: RootState) => state.watchlist.items);

  if (watchlist.includes(id)) {
    toast.error(
      `${id.charAt(0).toUpperCase() + id.slice(1)} is already added to the watchlist!`
    );
  } else {
    dispatch(addToWatchlist(id));
    toast.success(
      `${id.charAt(0).toUpperCase() + id.slice(1)} added to the watchlist`
    );
  }

  return null;
};
