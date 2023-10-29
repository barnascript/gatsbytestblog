import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./Layout.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Layout = ({ pageTitle, pageDescription }) => {
  return (
    <div className={container}>
      <nav className={navLinks}>
        <Link to="/" className={navLinkItem}>
          Home
        </Link>
        <Link to="/about" className={navLinkItem}>
          About
        </Link>
      </nav>

      <main>
        <h1 className={heading}>{pageTitle}</h1>
        <p>{pageDescription}</p>
      </main>
    </div>
  );
};

export default Layout;
