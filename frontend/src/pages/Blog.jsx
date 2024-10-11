import BlogContentList from "../components/BlogContent";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer";
import MainHeader from "../shared/navigation/MainHeader";
import PageHeader from "../shared/ui/PageHeader";
import styles from "./Blog.module.css";

function Blog() {
  return (
    <>
      <MainHeader />
      <PageHeader
        title="Blog"
        sub="Inspiring Ideas and Resources for Parents and Educators at KIDZIN"
        image="images/44.jpg"
      />
      <section className={styles.blog}>
        <div className={`row ${styles.row}`}>
          <BlogList />
          <BlogContentList />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Blog;
