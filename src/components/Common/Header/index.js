import React, { useCallback, useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton, Switch } from '@mui/material';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/utils/redux';
import { setTheme, selectDarkMode } from '@/utils/redux/reducer/themeReducer';

 const  index = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(selectDarkMode); 

  const changeMode = () => {
    dispatch(setTheme(!darkMode));
    toast.success('Theme Changed!');
  };

  const setDark = useCallback(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  const setLight = useCallback(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  useEffect(() => {
    if (darkMode) {
      setDark();
    } else {
      setLight();
    }
  }, [darkMode, setDark, setLight]);

  return (
    <div className="navigation-bar">
      <div className="header">
        <h1>
          CryptoTracker<span className="highlight">.</span>
        </h1>
        <div className="links">
          <Link href="/explore">
            <p className="link">Explore</p>
          </Link>
          <Link href="/">
            <p className="link">Home</p>
          </Link>
          <Link href="/watchlist">
            <p className="link">Watchlist</p>
          </Link>
          <Switch checked={darkMode} onClick={changeMode} />
        </div>
        <div className="drawer-component">
          <IconButton onClick={() => setOpen(true)} className="menu-button">
            <MenuRoundedIcon />
          </IconButton>
          <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
            <div className="drawer-div">
              <Link href="/explore">
                <p className="link">Explore</p>
              </Link>
              <Link href="/">
                <p className="link">Home</p>
              </Link>
              <Link href="/watchlist">
                <p className="link">Watchlist</p>
              </Link>
              <Switch checked={darkMode} onClick={changeMode} />
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
}
export default index;