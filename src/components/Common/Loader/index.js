import { CircularProgress } from "@mui/material";
import React from "react";

function Loader() {
  return (
    <div className="loader-background">
      <CircularProgress />
    </div>
  );
}

export default Loader;
