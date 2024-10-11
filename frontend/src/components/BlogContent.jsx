import styles from "./BlogContent.module.css";
import { blogs } from "../../public/data.jsx";
import { useState } from "react";
import Button from "../shared/ui/Button.jsx";

function BlogContentList() {
  const [currOpen, setCurrOpen] = useState(null);
  return (
    <div className={styles.blogPosts}>
      {blogs.map((blog, i) => (
        <BlogContent
          blog={blog}
          key={i}
          id={i}
          currOpen={currOpen}
          setCurrOpen={setCurrOpen}
        />
      ))}
    </div>
  );
}
export default BlogContentList;

function BlogContent({ blog, id, currOpen, setCurrOpen }) {
  const { title, images, content } = blog;
  let isOpen = currOpen === id;

  const styl = {
    border: {
      borderTop: isOpen ? "3.5px solid var(--peachy-red)" : "",
    },
    color: {
      color: isOpen ? "var(--peachy-red)" : "rgb(46, 46, 46)",
      opacity: isOpen ? 1 : 0.25,
    },
  };

  function handleClick(id) {
    isOpen ? setCurrOpen(null) : setCurrOpen(id);
  }

  return (
    <div
      className={styles.blog}
      style={styl.border}
      onClick={() => handleClick(id)}
    >
      <div className={styles.header}>
        <span className={styles.index}>{id < 10 ? `0${id + 1}` : id + 1}</span>
        <h2>{title}</h2>
        <button className={styles.btn}>{isOpen ? "-" : "+"}</button>
      </div>
      <div className={`${styles.content} ${isOpen ? styles.show : ""}`}>
        <div>
          <img src={images[0]} alt="blog-image" />
          <p dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <div style={{ clear: "both" }}>
          <CommentForm />
        </div>
      </div>
    </div>
  );
}

function CommentForm() {
  return (
    <div className={styles.commentBox}>
      <h3>Leave a comment</h3>
      <form className={styles.commentForm}>
        <input type="text" placeholder="Enter Name" />
        <input type="email" placeholder="Enter Email" />
        <textarea rows="5" placeholder="Your Comment"></textarea>
        <Button style="redBtn">POST COMMENT</Button>
      </form>
    </div>
  );
}
