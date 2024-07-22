import React from "react";
import { Typography } from "@material-tailwind/react";
import "../CSS/Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <Typography color="blue-gray" className="font-normal"> 
        &copy; 2024 <a href="https://vishalgarje.vercel.app/" className="webLink" target="_blank"> Vishal G. </a>
      </Typography>
    </footer>
  );
}
