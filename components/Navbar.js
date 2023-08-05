import React from "react";

import Script from "next/script";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
const Navbar = () => {
  return (
    <nav className={styles.mainNav}>
      <ul>
        <Link href='/'>
          {" "}
          <li>Home</li>
        </Link>
        <Link href='/About'>
          <li>About</li>
        </Link>
        <Link href='/Blog'>
          <li>Blog</li>
        </Link>
        <Link href='/Contact'>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
