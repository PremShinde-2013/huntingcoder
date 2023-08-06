import React, { useEffect, useState } from "react";
import styles from "../styles/blog.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

//step 1: collect all files from all files from blogdata directory
//step 2: iterate through them and display them

const Blog = (props) => {
  console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs);
  // useEffect(() => {
  //   console.log("useEffect is running");
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       console.log(parsed);
  //       setBlogs(parsed);
  //     });
  // }, []);

  return (
    <main className={`${styles.main} ${inter.className}`}>
      <div className={styles.center}>
        <div className='blogs'>
          {blogs.map((blogItem) => {
            return (
              <div className={styles.blogItem} key={blogItem.title}>
                <Link href={`/blogpost/${blogItem.slug}`}>
                  <h3>{blogItem.title}</h3>
                </Link>
                <p>{blogItem.content.substr(0, 200)} </p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};
export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();

  return {
    props: { allBlogs },
  };
}

export default Blog;
