import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/blogpost.module.css";
import { render } from "react-dom";

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page

const slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

  // const router = useRouter();
  // useEffect(() => {
  //   if (!router.isReady) return;
  //   const { slug } = router.query;
  //   fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       setBlog(parsed);
  //     });
  // }, [router.isReady]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <div>{blog && blog.content}</div>
      </main>
    </div>
  );
};

// for server side render

export async function getServerSideProps(context) {
  // const router = useRouter();
  // console.log(context.query);
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`);

  let myBlog = await data.json();
  return {
    props: { myBlog },
  };
}

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { slug: "how-to-learn-JavaScript" } },
//       { params: { slug: "how-to-learn-react" } },
//       { params: { slug: "how-to-learn-nextjs" } },
//     ],
//     fallback: true,
//   };
// }

// export async function getStaticProps({ context }) {
//   const res = await fetch(`https://.../posts/${params.id}`);
//   const post = await res.json();

//   return { props: { post } };
// }

export default slug;
