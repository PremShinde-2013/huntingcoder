import React from "react";
import styles from "../styles/blog.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const Blog = () => {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <div className={styles.center}>
        <div className='blogs'>
          <h2>Popular Blogs</h2>
          <div className={styles.blogItem}>
            <h3>How to learn React in 2023...</h3>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn React in 2023...</h3>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn React in 2023...</h3>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn React in 2023...</h3>
            <p>Javascript is the language used to design logic for the web</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
