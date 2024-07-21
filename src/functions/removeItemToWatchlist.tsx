import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { removeFromWatchlist } from '../utils/redux/slices/watchlistSlice';
import { AppDispatch, RootState } from '../utils/redux/store';
import { useSelector } from 'react-redux';

interface RemoveItemToWatchlistProps {
  e: React.MouseEvent<HTMLButtonElement>;
  id: string;
  setIsCoinAdded: (value: boolean) => void;
}

export const RemoveItemToWatchlist: React.FC<RemoveItemToWatchlistProps> = ({ e, id, setIsCoinAdded }) => {
  e.preventDefault();
  const dispatch = useDispatch<AppDispatch>();
  const watchlist = useSelector((state: RootState) => state.watchlist.items);

  if (window.confirm("Are you sure you want to remove this coin?")) {
    dispatch(removeFromWatchlist(id));
    setIsCoinAdded(false);
    toast.success(
      `${id.charAt(0).toUpperCase() + id.slice(1)} has been removed!`
    );
  } else {
    toast.error(
      `${id.charAt(0).toUpperCase() + id.slice(1)} could not be removed!`
    );
    setIsCoinAdded(true);
  }

  return null;
};
