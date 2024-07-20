"use client";
import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton, Switch } from "@mui/material";
import { toast } from "react-toastify";
import Link from "next/link";


export default function Header() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState("dark");

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    if (localStorage.getItem("theme") !== "dark") {
      setDark();
    } else {
      setLight();
    }
    setDarkMode(!darkMode);
    toast.success("Theme Changed!");
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

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
