import styles from "./BlogList.module.css";

const categories = [
  { category: "Parenting Tips", count: 1 },
  { category: "Art and Creativity", count: 2 },
  { category: "Special Events", count: 5 },
  { category: "Summer Camp", count: 3 },
  { category: "Social and Emotional Development", count: 3 },
  { category: "Outdoor Play", count: 3 },
];

function BlogList() {
  return (
    <div className={styles.blogList}>
      <h3>Post Categories</h3>
      {categories.map((category, index) => (
        <BlogItem category={category} key={index} />
      ))}
    </div>
  );
}

function BlogItem({ category }) {
  return (
    <div className={styles.category}>
      <span className={styles.title}>{category.category}</span>
      <span>{category.count}</span>
    </div>
  );
}

export default BlogList;
